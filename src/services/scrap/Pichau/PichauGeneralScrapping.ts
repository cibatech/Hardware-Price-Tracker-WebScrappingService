import puppeteer, { PuppeteerError } from "puppeteer";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { ProductRepository } from "../../../repositories/Product.repository,";
import { PriceReferenceRepository } from "../../../repositories/PriceReference.repository";
import { sluggen } from "../../../utils/sluggen";
import { Price, Product } from "../../../../prisma/deploy-output";

/**
 * Class responsible for general scraping operations on Pichau's website, extracting product information
 * such as titles, links, images, descriptions, and prices from a given URL.
 */
export class PichauGeneralScrappingUseCase {
    /**
     * Creates an instance of PichauGeneralScrappingUseCase.
     * 
     * @param ProductRepository - Repository for managing product data.
     * @param PriceReferenceRepository - Repository for managing price reference data.
     */
    constructor(private ProductRepository:ProductRepository,private PriceReferenceRepository:PriceReferenceRepository){}
    /**
     * Executes the scraping process to extract product information from the given URL.
     * 
     * @param CoreUrl - The URL of the Pichau page to scrape data from.
     * @returns An object containing a list of scraped product data or `false` if no data is found.
     * @throws {PuppeteerError} Throws an error if there are issues with Puppeteer operations or DOM evaluation.
     */
    async execute(CoreUrl:string){
        const browser = await puppeteer.launch({ headless: true });
        const page = await browser.newPage();
        await page.setViewport({ width: 1080, height: 1024 });
    
        const searchList = CoreUrl;
        const PoquireReturnList:TransferDataObjectFromDOM[] = [];
    
        await page.goto(searchList, { 
            waitUntil: "networkidle2",
            timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)
         });
        
        await page.waitForNetworkIdle({timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)/2})
        await page.waitForSelector(".MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3")
        const ps:TransferDataObjectFromDOM[] = await page.evaluate(()=>{
            //Encontra elementos específicos 
            const DOMList = document.querySelector(".MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3") as HTMLDivElement
            const iDivList = DOMList.querySelectorAll(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.MuiGrid-grid-sm-6.MuiGrid-grid-md-4.MuiGrid-grid-lg-3.MuiGrid-grid-xl-2") as NodeListOf<HTMLDivElement>
    
            var prepList:TransferDataObjectFromDOM[] = [];
    
            for(let i=0;i<iDivList.length;i++){
                
                const element = iDivList[i];
                if(element){
                    //seleciona os elementos HTML dentro do elemento principal 
                    const aReference = element.querySelector("a") as HTMLAnchorElement;
                    const imgReference = element.querySelector("img") as HTMLImageElement;
                    const h2Reference = element.querySelector("h2");
                    const SpanForprice = element.querySelector("span") as HTMLSpanElement;
                    const hForTitle = aReference.querySelector("h2.MuiTypography-root.MuiTypography-h6") as HTMLHeadingElement
                    const prepCon:TransferDataObjectFromDOM = {
                        Link:aReference.href,
                        Where:window.location.href,
                        description:h2Reference?h2Reference.innerHTML:null,
                        image:imgReference?imgReference.src:null,
                        Price:SpanForprice?Number(SpanForprice.innerHTML.replace("R$&nbsp;","").replace(/[^0-9,.]/g, '')):null,
                        Title:hForTitle.innerHTML
                    }
                    prepList.push(prepCon)
                }
            }
            return prepList
        })
    
        console.log({
            psList:ps,
        });
    
        await page.close();
        await browser.close();
 
         // uses to check if there's already any link reference in the products list. if the answear is false so it will create a new product. if it is true it will update the products price and create a price reference of the new value.
        
         const resList:Product[] = []
         const priceList:Price[] = [];
         
         for(let i=0;i<=ps.length;i++){
             const Element = ps[i];
             const theresAlreadyAnyProductWithThisLink = await this.ProductRepository.findByLink(Element.Link);
             if(theresAlreadyAnyProductWithThisLink){
                 //add the price reference to the product and updates the product with the newest price.
 
                 //updates the product with the new price
                 this.ProductRepository.update(theresAlreadyAnyProductWithThisLink.Id,{
                     Value:Number(Element.Price)
                 })
 
                 priceList.push(
                     await this.PriceReferenceRepository.create({
                         AtDate:new Date(),
                         Price:Number(Element.Price),
                         ProdId:theresAlreadyAnyProductWithThisLink.Id,
 
                     })
                 )
             }else{
                 //Add the new product to the reslist
                 resList.push(
                     await this.ProductRepository.create({
                         Kind:"TeraByte",
                         Link:Element.Link,
                         Slug:sluggen(String(Element.description)),
                         Value:Number(Element.Price),
                         Where:Element.Where,
                         Description:Element.description,
                         ImageUrl:Element.image,
                         Title:Element.Title
                     })
                 )
             }
         } 
        return {
            resList,
            priceList
        }
    }
}