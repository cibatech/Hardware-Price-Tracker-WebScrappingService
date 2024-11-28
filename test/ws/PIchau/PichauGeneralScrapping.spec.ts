import { beforeEach, describe, expect, it } from "vitest";
import { PichauLinkCollection } from "../../../src/collections/StandardLinkCollection";
import { PichauGeneralScrappingUseCase } from "../../../src/services/scrap/Pichau/PichauGeneralScrapping";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../src/lib/env";
import { InMemoryProductRepository } from "../../../src/repositories/InMemory/inMemoryProductRepository";
import { InMemoryPriceReferenceRepository } from "../../../src/repositories/InMemory/InMemoryPriceReferenceRepository";


var SUT:PichauGeneralScrappingUseCase
var ProductRep:InMemoryProductRepository 
var PriceRep:InMemoryPriceReferenceRepository
describe("Good Case",async()=>{
    beforeEach(async()=>{  
        ProductRep = new InMemoryProductRepository()
        PriceRep = new InMemoryPriceReferenceRepository()
        SUT = new PichauGeneralScrappingUseCase(ProductRep,PriceRep)
    })
    it("Should be able to scrap pichau",async()=>{
        const ps = await SUT.execute(PichauLinkCollection.subSitesList[0]);

        expect(ps.resList).toHaveLength(36)
    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })
    it("Should be able to generate a price reference of the already existing product",async()=>{
        await SUT.execute(PichauLinkCollection.subSitesList[0]);
        const test = await SUT.execute(PichauLinkCollection.subSitesList[0]);

        expect(test.priceList[0].Price).toBeTypeOf("number")
    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })
    console.warn("writes here a test to price reference")
})
