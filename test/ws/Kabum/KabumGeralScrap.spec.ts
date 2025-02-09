import { beforeAll, beforeEach, describe, expect, it } from "vitest";
import { KabumScrappingUseCase } from "../../../src/services/scrap/Kabum/KabumGeneralScrappingService";
import { InMemoryProductRepository } from "../../../src/repositories/InMemory/inMemoryProductRepository";
import { KabumLinkCollection } from "../../../src/collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../src/lib/env";
import { InMemoryPriceReferenceRepository } from "../../../src/repositories/InMemory/InMemoryPriceReferenceRepository";
import { log } from "console";


var SUT:KabumScrappingUseCase
var ProductRep:InMemoryProductRepository
var PriceRep:InMemoryPriceReferenceRepository

describe("Good case",()=>{
    beforeAll(()=>{
        ProductRep = new InMemoryProductRepository
        PriceRep = new InMemoryPriceReferenceRepository
        SUT = new KabumScrappingUseCase(ProductRep,PriceRep)
    })
    it("Should be able to Scrap a kabum product page.",async()=>{
        const test = await SUT.excute(KabumLinkCollection.subSitesList[0]);
        expect(test.ProductList[0].Title).toBeTypeOf("string")
        // log(test)
    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })
    // it("Should be able to generate a price reference of the already existing product",async()=>{
        
    //     ProductRep.create({
    //         Link:"https://www.kabum.com.br/produto/474939/memoria-ram-xpg-gammix-d35-8gb-3200mhz-ddr4-cl16-preto-ax4u32008g16a-sbkd35",
    //         Kind:"Kabum",
    //         Slug:"",
    //         Value:23,
    //         Where:"hardware",
    //         Description:""
            
    //     })
    //     const test = await SUT.excute(KabumLinkCollection.subSitesList[0]);

    //     console.log(test.PriceList)

    //     expect(test.PriceList[0]).toBeDefined()
    // },{
    //     timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    // })
})
