import puppeteer from "puppeteer";
import { StaticLinkRepository } from "../../../repositories/StaticLink.repository";
import { PichauLinkCollection } from "../../../collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { create } from "domain";
import { PichauScrapCaregoyLinks } from "../../../utils/scrap/Pichau/PichauGetCategoryLinkList";
import { StaticLink } from "../../../../prisma/deploy-output";


interface linkList{
    Link:string,
}
/**
 * Class responsible for scraping and retrieving a list of links from Pichau's website
 * and storing them in a static link repository.
 */
export class GetPichauLinkListUseCase{
    /**
     * Creates an instance of GetPichauLinkListUseCase.
     * 
     * @param LinksRepository - A repository for handling operations related to static links.
     */
    constructor(private LinksRepository:StaticLinkRepository){}
    /**
     * Executes the use case to scrape links from Pichau's website, process them, 
     * and store them in the static link repository.
     * 
     * @returns An object containing the list of created static links.
     * @throws {Error} Throws an error if any issues occur during browser automation or repository operations.
     */
    async execute(){
        const ps = await PichauScrapCaregoyLinks()

        const created:StaticLink[] = [] 
        ps.forEach(async (Element,index)=>{
            if(index>6&&index<18){
                const Link = await this.LinksRepository.create({
                    Link:Element,
                    Where:"Pichau"
                })
                created.push(Link)
            }
        })
        // console.log(created);
        
        return{
            StaticLinkList:created
        }
    }
}