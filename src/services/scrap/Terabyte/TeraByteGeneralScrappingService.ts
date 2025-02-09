import puppeteer from "puppeteer";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";
import { TeraByteLinkCollection } from "../../../collections/StandardLinkCollection";
import { ProductRepository } from "../../../repositories/Product.repository,";
import { sluggen } from "../../../utils/sluggen";
import { Price, Product } from "../../../../prisma/deploy-output";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { PriceReferenceRepository } from "../../../repositories/PriceReference.repository";
import { ScrapTerabyteProductListFromAPage } from "../../../utils/scrap/TeraByte/TeraByteGeneralScrapping";
import { CompareProductsToReturnPrices } from "../../../utils/CompareProductsToReturnPrices";

interface TerabyteProductScrapResponse{
    resList:Product[]
}

export class TerabyteProductScrapUseCase {
    constructor(private ProductRepository:ProductRepository,private PriceReferenceRepository:PriceReferenceRepository){}
    async execute(queryParam:string){

        //call the scrapping function
        const ps = await ScrapTerabyteProductListFromAPage(queryParam);
        
        // uses to check if there's already any link reference in the products list. if the answear is false so it will create a new product. if it is true it will update the products price and create a price reference of the new value.
        const {priceList,resList} = await CompareProductsToReturnPrices({
            Kind:"TeraByte",
            priceRepo:this.PriceReferenceRepository,
            productRepo:this.ProductRepository,
            ps
        })

        return {
            resList,
            priceList
        }
    }


}

