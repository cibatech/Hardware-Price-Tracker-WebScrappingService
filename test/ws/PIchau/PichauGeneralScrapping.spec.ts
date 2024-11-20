import { beforeEach, describe, expect, it } from "vitest";
import { PichauLinkCollection } from "../../../src/collections/StandardLinkCollection";
import { PichauGeneralScrappingUseCase } from "../../../src/services/scrap/Pichau/PichauGeneralScrapping";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../src/lib/env";


var SUT:PichauGeneralScrappingUseCase

describe("Good Case",async()=>{
    beforeEach(async()=>{  
        SUT = new PichauGeneralScrappingUseCase
    })
    it("Should be able to scrap pichau",async()=>{
        const ps = await SUT.execute(PichauLinkCollection.subSitesList[0]);

        expect(ps.ResList).toHaveLength(36)
    },{
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)+20000
    })
})
