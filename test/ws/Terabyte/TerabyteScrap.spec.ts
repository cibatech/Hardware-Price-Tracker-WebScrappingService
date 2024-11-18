import { beforeEach, describe, expect, it } from "vitest";
import { KabumScrappingUseCase } from "../../../src/services/scrap/Kabum/KabumGeneralScrappingService";
import { InMemoryProductRepository } from "../../../src/repositories/InMemory/inMemoryProductRepository";
import { KabumLinkCollection, TeraByteLinkCollection } from "../../../src/collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../src/lib/env";
import { TerabyteProductScrapUseCase } from "../../../src/services/scrap/Terabyte/TeraByteGeneralScrappingService";


var SUT:TerabyteProductScrapUseCase
var repository:InMemoryProductRepository

describe("Good case",()=>{
    beforeEach(()=>{
        repository = new InMemoryProductRepository
        SUT = new TerabyteProductScrapUseCase(repository)
    })
    it("Should be able to Scrap a terabyte product page.",async()=>{
        const test = await SUT.execute(TeraByteLinkCollection.SubSitesList[0]);

        expect(test.resList[0].Title).toBeTypeOf("string")

    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })
})
