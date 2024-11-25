import puppeteer from "puppeteer";
import { StaticLinkRepository } from "../../../repositories/StaticLink.repository";
import { PichauLinkCollection } from "../../../collections/StandardLinkCollection";
import { StaticLink } from "../../../../prisma/indev-output";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { create } from "domain";


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
        const browser = await puppeteer.launch({
            headless:false
        });
        const page = await browser.newPage();
    
        await page.goto(PichauLinkCollection.coreSite)
    
        //aguarda até que tudo carregue devidamente
        await page.waitForNetworkIdle({
            timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)
        })
        await page.waitForSelector("div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-4.MuiGrid-grid-xl-3 > button.MuiButtonBase-root[aria-label='menu']")
        await page.click("div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-4.MuiGrid-grid-xl-3 > button.MuiButtonBase-root[aria-label='menu']")
        await page.waitForSelector("div.MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiPaper-elevation16")
        const ps = await page.evaluate(()=>{
            const DOMCore = document.querySelector("div.MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiPaper-elevation16") as HTMLDivElement;
            const LiList = DOMCore.querySelectorAll("li" ) as NodeListOf<HTMLLIElement>
            var resList:linkList[] = []
    
            LiList.forEach(Element=>{
                const searchForA = Element.querySelector("a") as HTMLAnchorElement
                resList.push({
                    Link:searchForA.href
                })
            })
    
            return resList
        })
        // console.log(ps)
        await browser.close()

        const created:StaticLink[] = [] 
        ps.forEach(async (Element,index)=>{
            if(index>0&&index<18){
                const Link = await this.LinksRepository.create({
                    Link:Element.Link,
                    Where:"Pichau"
                })
                created.push(Link)
            }
        })
        console.log(created);
        
        return{
            StaticLinkList:created
        }
    }
}