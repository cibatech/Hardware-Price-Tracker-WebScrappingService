import puppeteer from "puppeteer";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";
import { Price, Product } from "../../../../prisma/deploy-output";
import { ProductRepository } from "../../../repositories/Product.repository,";
import { sluggen } from "../../../utils/sluggen";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { PriceReferenceRepository } from "../../../repositories/PriceReference.repository";
import { KabumGeneralScrapping } from "../../../utils/scrap/Kabum/KabumGeneralScrapping";
import { CompareProductsToReturnPrices } from "../../../utils/CompareProductsToReturnPrices";

export class KabumScrappingUseCase {
    constructor(private ProductRepository:ProductRepository,private PriceReferenceRepository:PriceReferenceRepository){}
    async excute(queryParam:string){
        
        const ps = await KabumGeneralScrapping(queryParam)

        const {priceList,resList} = await CompareProductsToReturnPrices({
            Kind:"Kabum",
            priceRepo:this.PriceReferenceRepository,
            productRepo:this.ProductRepository,
            ps
        })

        // console.log( {
        //     PriceList,
        //     ProductList
        // })
        
        return {
            PriceList:priceList,
            ProductList:resList
        }
    }
}