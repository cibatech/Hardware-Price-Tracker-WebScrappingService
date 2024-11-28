import { kind, Price, Product } from "../../prisma/deploy-output";
import { TransferDataObjectFromDOM } from "../collections/domRecieverInterface";
import { PriceReferenceRepository } from "../repositories/PriceReference.repository";
import { ProductRepository } from "../repositories/Product.repository,";
import { sluggen } from "./sluggen";
interface CompareProductsParams{
    ps:TransferDataObjectFromDOM[],
    productRepo:ProductRepository,
    priceRepo:PriceReferenceRepository,
    Kind:kind
}
/**
 * Compares a list of products from a DOM transfer object with a repository of existing products,
 * updating prices for existing products and adding new products as needed.
 *
 * @param {CompareProductsParams} params - An object containing parameters required for the comparison and updates.
 * @param {TransferDataObjectFromDOM[]} params.ps - A list of product data objects transferred from the DOM.
 * @param {ProductRepository} params.productRepo - Repository for managing product data.
 * @param {PriceReferenceRepository} params.priceRepo - Repository for managing price references.
 * @param {kind} params.Kind - A kind (enum) identifier to classify the products.
 *
 * @returns {Promise<{resList: Product[], priceList: Price[]}>} 
 *          An object containing:
 *          - `resList`: A list of newly added products.
 *          - `priceList`: A list of created price references.
 *
 * @async
 *
 * @description
 * This function iterates over the list of product data (`ps`) and:
 * - Checks if a product already exists in the repository by its link (`Link`).
 * - If the product exists:
 *   - Updates its price in the `ProductRepository`.
 *   - Creates a new price reference in the `PriceReferenceRepository`.
 * - If the product does not exist:
 *   - Creates a new product in the `ProductRepository` and adds it to the result list.
 *
 * The function returns two lists:
 * - `resList`: Newly added products.
 * - `priceList`: New price references created during the process.
 *
 * @example
 * ```typescript
 * const transferData = [
 *   { Link: "https://example.com/prod1", Price: "100.00", description: "Product 1", Where: "Store A", image: "https://example.com/prod1.jpg", Title: "Prod 1" },
 *   { Link: "https://example.com/prod2", Price: "150.00", description: "Product 2", Where: "Store B", image: "https://example.com/prod2.jpg", Title: "Prod 2" }
 * ];
 *
 * const result = await CompareProductsToReturnPrices({
 *   ps: transferData,
 *   productRepo: myProductRepository,
 *   priceRepo: myPriceRepository,
 *   Kind: "Electronics"
 * });
 *
 * console.log(result.resList); // Newly added products
 * console.log(result.priceList); // Created price references
 * ```
 */
export async function CompareProductsToReturnPrices({Kind,priceRepo,productRepo,ps}:CompareProductsParams) {
    const resList:Product[] = []
    const priceList:Price[] = []
    for(let i=0;i<ps.length;i++){
        const Element = ps[i];
        const theresAlreadyAnyProductWithThisLink = await productRepo.findByLink(Element.Link);

        if(theresAlreadyAnyProductWithThisLink){
            console.log(true)
            //add the price reference to the product and updates the product with the newest price.

            //updates the product with the new price
            productRepo.update(theresAlreadyAnyProductWithThisLink.Id,{
                Value:Number(Element.Price)
            })

            priceList.push(
                await priceRepo.create({
                    AtDate:new Date(),
                    Price:Number(Element.Price),
                    ProdId:theresAlreadyAnyProductWithThisLink.Id,
                })
            )
        }else{
            console.log(false)
            //Add the new product to the reslist
            resList.push(
                await productRepo.create({
                    Kind:Kind,
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
    return{
        resList,
        priceList
    }
}