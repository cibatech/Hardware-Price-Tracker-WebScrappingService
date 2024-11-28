import { beforeEach, describe, expect, it } from "vitest";
import { KabumScrappingUseCase } from "../../../src/services/scrap/Kabum/KabumGeneralScrappingService";
import { InMemoryProductRepository } from "../../../src/repositories/InMemory/inMemoryProductRepository";
import { KabumLinkCollection, TeraByteLinkCollection } from "../../../src/collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../src/lib/env";
import { TerabyteProductScrapUseCase } from "../../../src/services/scrap/Terabyte/TeraByteGeneralScrappingService";
import { InMemoryStaticLinkRepository } from "../../../src/repositories/InMemory/inMemoryStaticLinkRepository";
import { InMemoryPriceReferenceRepository } from "../../../src/repositories/InMemory/InMemoryPriceReferenceRepository";
import { warn } from "console";


var SUT:TerabyteProductScrapUseCase
var Prod_repository:InMemoryProductRepository
var Price_Repository:InMemoryPriceReferenceRepository
describe("Good case",()=>{
    beforeEach(()=>{
        Prod_repository = new InMemoryProductRepository()
        Price_Repository = new InMemoryPriceReferenceRepository()
        SUT = new TerabyteProductScrapUseCase(Prod_repository,Price_Repository)
    })
    it("Should be able to Scrap a terabyte product page.",async()=>{
        const test = await SUT.execute(TeraByteLinkCollection.SubSitesList[0]);

        expect(test.resList[0].Title).toBeTypeOf("string")

    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })

    warn("writes here a test to price reference")
})
