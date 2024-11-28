import puppeteer from "puppeteer";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";
import { Price, Product } from "../../../../prisma/deploy-output";
import { ProductRepository } from "../../../repositories/Product.repository,";
import { sluggen } from "../../../utils/sluggen";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { PriceReferenceRepository } from "../../../repositories/PriceReference.repository";
import { KabumGeneralScrapping } from "../../../utils/scrap/Kabum/KabumGeneralScrapping";

export class KabumScrappingUseCase {
    constructor(private ProductRepository:ProductRepository,private PriceReferenceRepository:PriceReferenceRepository){}
    async excute(queryParam:string){
        
        const ps = await KabumGeneralScrapping(queryParam)

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

        
        // console.log( {
        //     PriceList,
        //     ProductList
        // })
        
        return {
            PriceList,
            ProductList
        }
    }
}