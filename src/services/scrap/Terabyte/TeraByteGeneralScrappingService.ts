import puppeteer from "puppeteer";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";
import { TeraByteLinkCollection } from "../../../collections/StandardLinkCollection";
import { ProductRepository } from "../../../repositories/Product.repository,";
import { sluggen } from "../../../utils/sluggen";
import { Price, Product } from "../../../../prisma/deploy-output";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { PriceReferenceRepository } from "../../../repositories/PriceReference.repository";
import { ScrapTerabyteProductListFromAPage } from "../../../utils/scrap/TeraByte/TeraByteGeneralScrapping";

interface TerabyteProductScrapResponse{
    resList:Product[]
}

export class TerabyteProductScrapUseCase {
    constructor(private ProductRepository:ProductRepository,private PriceReferenceRepository:PriceReferenceRepository){}
    async execute(queryParam:string){

        //call the scrapping function
        const ps = await ScrapTerabyteProductListFromAPage(queryParam);
        
        // uses to check if there's already any link reference in the products list. if the answear is false so it will create a new product. if it is true it will update the products price and create a price reference of the new value.
        
        const resList:Product[] = [];
        const priceList:Price[] = [];

        for(let i=0;i<ps.length;i++){
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

