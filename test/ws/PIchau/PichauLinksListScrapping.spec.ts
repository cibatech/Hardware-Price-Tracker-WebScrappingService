import { beforeEach, describe, expect, it } from "vitest";

import { StaticLinkRepository } from "../../../src/repositories/StaticLink.repository";
import { InMemoryStaticLinkRepository } from "../../../src/repositories/InMemory/inMemoryStaticLinkRepository";
import { GetPichauLinkListUseCase } from "../../../src/services/scrap/Pichau/GetLinkListFromPichau";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../src/lib/env";

var SUT:GetPichauLinkListUseCase
var LinksRep:StaticLinkRepository
describe("Good Case",()=>{
    beforeEach(async()=>{
        LinksRep = new InMemoryStaticLinkRepository()
        SUT = new GetPichauLinkListUseCase(LinksRep)
    })
    it("Should be able to return the linkList of Pichau",async()=>{
        const resp = await SUT.execute();
        console.log(resp)
        expect(resp.StaticLinkList[0].Link).toBeTypeOf("string")
        expect(resp.StaticLinkList[0].Where).toBe("Pichau")
    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })
})