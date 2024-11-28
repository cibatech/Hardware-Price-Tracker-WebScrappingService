import puppeteer, { PuppeteerError } from "puppeteer";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { ProductRepository } from "../../../repositories/Product.repository,";
import { PriceReferenceRepository } from "../../../repositories/PriceReference.repository";
import { sluggen } from "../../../utils/sluggen";
import { Price, Product } from "../../../../prisma/deploy-output";
import { PichauScrapStore } from "../../../utils/scrap/Pichau/PichauStoreScrapPage";

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
        const ps = await PichauScrapStore(CoreUrl)
 
         // uses to check if there's already any link reference in the products list. if the answear is false so it will create a new product. if it is true it will update the products price and create a price reference of the new value.
        
         const resList:Product[] = []
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