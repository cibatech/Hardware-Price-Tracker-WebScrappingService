import { beforeEach, describe, expect, it } from "vitest";
import { KabumScrappingUseCase } from "../../../src/services/scrap/Kabum/KabumGeneralScrappingService";
import { InMemoryProductRepository } from "../../../src/repositories/InMemory/inMemoryProductRepository";
import { KabumLinkCollection } from "../../../src/collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../src/lib/env";


var SUT:KabumScrappingUseCase
var repository:InMemoryProductRepository

describe("Good case",()=>{
    beforeEach(()=>{
        repository = new InMemoryProductRepository
        SUT = new KabumScrappingUseCase(repository)
    })
    it("Should be able to Scrap a kabum product page.",async()=>{
        const test = await SUT.excute(KabumLinkCollection.subSitesList[0]);

        expect(test.resList[0].Title).toBeTypeOf("string")

    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })
})
