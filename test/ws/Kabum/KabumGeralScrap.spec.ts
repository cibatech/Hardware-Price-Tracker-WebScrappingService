import { beforeEach, describe, expect, it } from "vitest";
import { KabumScrappingUseCase } from "../../../src/services/scrap/Kabum/KabumGeneralScrappingService";
import { InMemoryProductRepository } from "../../../src/repositories/InMemory/inMemoryProductRepository";
import { KabumLinkCollection } from "../../../src/collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../src/lib/env";
import { InMemoryPriceReferenceRepository } from "../../../src/repositories/InMemory/InMemoryPriceReferenceRepository";


var SUT:KabumScrappingUseCase
var ProductRep:InMemoryProductRepository
var PriceRep:InMemoryPriceReferenceRepository

describe("Good case",()=>{
    beforeEach(()=>{
        ProductRep = new InMemoryProductRepository
        PriceRep = new InMemoryPriceReferenceRepository
        SUT = new KabumScrappingUseCase(ProductRep,PriceRep)
    })
    it("Should be able to Scrap a kabum product page.",async()=>{
        const test = await SUT.excute(KabumLinkCollection.subSitesList[0]);
        expect(test.ProductList[0].Title).toBeTypeOf("string")

    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })
    it("Should be able to generate a price reference of the already existing product",async()=>{
        await SUT.excute(KabumLinkCollection.subSitesList[0]);
        const test = await SUT.excute(KabumLinkCollection.subSitesList[0]);

        // console.log(test.PriceList)
    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })
})
