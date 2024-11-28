import puppeteer from "puppeteer";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";
import { Price, Product } from "../../../../prisma/deploy-output";
import { ProductRepository } from "../../../repositories/Product.repository,";
import { sluggen } from "../../../utils/sluggen";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { PriceReferenceRepository } from "../../../repositories/PriceReference.repository";

export class KabumScrappingUseCase {
    constructor(private ProductRepository:ProductRepository,private PriceReferenceRepository:PriceReferenceRepository){}
    async excute(queryParam:string){
        const browser = await puppeteer.launch({
            headless:true
        })
        const page =  await browser.newPage()
        await page.goto(queryParam);

        //Aguarda o carregamento da pagina
        await page.waitForNetworkIdle({
            timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)
        })
    
        //garante que o seletor principal vai ser retornado
        await page.waitForSelector("main.sc-1be01e1c-9.bpRSSD")
        await page.waitForSelector(".priceCard")
        //função executada no DOM da pagina
        const ps = await page.evaluate(()=>{
            const DOM = document.querySelector("main.sc-1be01e1c-9.bpRSSD");
            const ContainerList = DOM?.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>;
            const returnList:TransferDataObjectFromDOM[] = []
    
            for(let i=0;i<ContainerList.length;i++){
                const element = ContainerList[i]
                const GetSpanElementFromH3 = element.querySelector("span.sc-d79c9c3f-0.nlmfp.sc-27518a44-9.iJKRqI.nameCard") as HTMLSpanElement
                const GetImageElementForLink = element.querySelector("img") as HTMLImageElement
                const GetPriceFromElement = element.querySelector("div.availablePricesCard > div.flex.items-center > span.priceCard") as HTMLSpanElement
                
                if(GetPriceFromElement){
                    let prop:TransferDataObjectFromDOM = {
                        description:GetSpanElementFromH3.innerHTML,
                        Where:window.location.href,
                        image:GetImageElementForLink.src,
                        Link:element.href,
                        Price:Number(GetPriceFromElement.innerHTML),
                        Title:GetSpanElementFromH3.innerHTML
                    }
                    returnList.push(prop)
                }
            }
            return returnList
        })
        // console.log(ps)
    
        browser.close()

        var ProductList:Product[] = []
        var PriceList:Price[] = []

        for(let i =0;i<ps.length;i++){
            const Element = ps[i]
            const doesTheProductAlreadyExists = await this.ProductRepository.findByLink(Element.Link)
            var pList:Price[] = []
            var prList:Product[] = []
            if(doesTheProductAlreadyExists){
                const create = await this.PriceReferenceRepository.create({
                    Price:Number(Element.Price),
                    ProdId:doesTheProductAlreadyExists.Id,
                    AtDate:new Date()
                })
                PriceList.push(create)
            }else{

                const object = await this.ProductRepository.create({
                    Kind:"TeraByte",
                    Link:Element.Link,
                    Slug:sluggen(String(Element.description)),
                    Value:Number(Element.Price),
                    Where:Element.Where,
                    Description:Element.description,
                    ImageUrl:Element.image,
                    Title:Element.Title
                })
                // console.log(object)
                ProductList.push(object)
            }
        }

        

        return {
            PriceList,
            ProductList
        }
    }
}