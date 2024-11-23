import { beforeEach, describe, expect, it } from "vitest";
import { TeraByteLinkScrapUseCase } from "../../../src/services/scrap/Terabyte/TeraByteLinkCollectionScrappings";
import { StaticLinkRepository } from "../../../src/repositories/StaticLink.repository";
import { InMemoryStaticLinkRepository } from "../../../src/repositories/InMemory/inMemoryStaticLinkRepository";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../src/lib/env";


var SUT:TeraByteLinkScrapUseCase;
var LinkRep:StaticLinkRepository

describe("Good Case",()=>{
    beforeEach(async()=>{
        LinkRep = new InMemoryStaticLinkRepository()
        SUT = new TeraByteLinkScrapUseCase(LinkRep)
    })
    it("Should be able to scrap a terabyte link collection",async()=>{
        const resp = await SUT.execute();
        console.log(resp);
        
        expect(resp.resList[0].Link).toBeTypeOf("string")
        expect(resp.resList[0].Where).toBe("TeraByte")
    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })
})