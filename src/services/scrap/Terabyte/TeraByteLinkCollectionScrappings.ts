import puppeteer from "puppeteer";
import { StaticLinkRepository } from "../../../repositories/StaticLink.repository";
import { TeraByteLinkCollection } from "../../../collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { StaticLink } from "../../../../prisma/indev-output";
import { TerabyteLinkListScrapping } from "../../../utils/scrap/TeraByte/TeraByteLinkListScrapping";

export class TeraByteLinkScrapUseCase{
        constructor(private LinkRepository:StaticLinkRepository){}
        async execute(){
        
        const ps = await TerabyteLinkListScrapping()

        const resList:StaticLink[] = []
        for(let i=0;i<ps.length;i++){
            const res = await this.LinkRepository.create({
                Link:ps[i],
                Where:"TeraByte"
            })
            resList.push(res)
        }

        return{
            resList
        }
    }
}