import puppeteer from "puppeteer";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";
import { TeraByteLinkCollection } from "../../../collections/StandardLinkCollection";
import { ProductRepository } from "../../../repositories/Product.repository,";
import { sluggen } from "../../../utils/sluggen";
import { Price, Product } from "../../../../prisma/deploy-output";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { PriceReferenceRepository } from "../../../repositories/PriceReference.repository";

interface TerabyteProductScrapResponse{
    resList:Product[]
}

export class TerabyteProductScrapUseCase {
    constructor(private ProductRepository:ProductRepository,private PriceReferenceRepository:PriceReferenceRepository){}
    async execute(queryParam:string){
        //cria uma instancia de um browser
        const browser = await puppeteer.launch({
            headless:true
        })
        //Abre uma nova pagina
        const page  = await browser.newPage();

        //ir até o site desejado
        await page.goto(queryParam);
        await page.waitForNetworkIdle({
            timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)
        })

        const ps:TransferDataObjectFromDOM[] = await page.evaluate(()=>{
            const DOM = document.querySelector(".products-grid") as HTMLDivElement
            const ItensList = DOM.querySelectorAll("div.product-item") as NodeListOf<HTMLDivElement>
            const resList:TransferDataObjectFromDOM[] = []

            ItensList.forEach(Element=>{
                const aElement = Element.querySelector("a.product-item__name") as HTMLAnchorElement
                const HToDescription = aElement.querySelector("h2") as HTMLHeadingElement
                const imgToLink = Element.querySelector("img.image-thumbnail") as HTMLImageElement
                const SpanForprice = Element.querySelector("div.product-item__new-price > span") as HTMLSpanElement
                const t:TransferDataObjectFromDOM = {
                    description:HToDescription.innerHTML,
                    image:imgToLink.src,
                    Link:aElement.href,
                    Where:window.location.href,
                    Price:Number(SpanForprice.innerHTML.replace(",",".").replace(/[^0-9.]/g, '')),
                    Title:HToDescription.innerHTML
                }
                resList.push(t)
            })

            return resList

        })
        //closes the browser
        browser.close()

        // console.log(ps)

        const resList:Product[] = []
        const priceList:Price[] = [];
        for(let i=0;i<=ps.length;i++){
            const Element = ps[i];
            const theresAlreadyAnyProductWithThisLink = await this.ProductRepository.findByLink(Element.Link);
            if(theresAlreadyAnyProductWithThisLink){
                priceList.push(
                    await this.PriceReferenceRepository.create({
                        AtDate:new Date(),
                        Price:Number(Element.Price),
                        ProdId:theresAlreadyAnyProductWithThisLink.Id,

                    })
                )
            }else{
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