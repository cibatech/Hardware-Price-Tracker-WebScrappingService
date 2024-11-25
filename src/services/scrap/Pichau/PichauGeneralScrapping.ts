import puppeteer, { PuppeteerError } from "puppeteer";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { ProductRepository } from "../../../repositories/Product.repository,";
import { PriceReferenceRepository } from "../../../repositories/PriceReference.repository";

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
        const Ps = await page.evaluate(()=>{
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
            if(prepList[0]){
                return prepList
            }else{
                return false
            }
        })
    
        console.log({
            psList:Ps,
        });
    
        await page.close();
        await browser.close();
 
        return {
            ResList:Ps
        }
    }
}