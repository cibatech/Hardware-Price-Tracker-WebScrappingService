import puppeteer from "puppeteer"
import { TeraByteLinkCollection } from "../../../collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";

export async function TerabyteLinkListScrapping():Promise<string[]> {
    
    const browser = await puppeteer.launch({
        headless:false
    });

    const page = await browser.newPage();
    
    await page.goto(TeraByteLinkCollection.coreSite);
    await page.waitForNetworkIdle({
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)/2
    })

    await page.waitForSelector("div.header-mega-menu-list");

    const ps = await page.evaluate(()=>{
        const DOMList = document.querySelector("div.header-mega-menu-list") as HTMLDivElement;
        
        const LiContent = DOMList.querySelectorAll("li.list-menu-item > a") as NodeListOf<HTMLAnchorElement>;
        const specifiedHardwareContent = DOMList.querySelectorAll("ul.menu-list-container-list > a") as NodeListOf<HTMLAnchorElement>;
        const linkList:string[] = [];

        for(let i =0;i<LiContent.length;i++){
            const e = LiContent[i];
            linkList.push(e.href);
        }
        for(let i =0;i<specifiedHardwareContent.length;i++){
            const e = specifiedHardwareContent[i];
            linkList.push(e.href);
        }
        return linkList
    })

    // console.log(ps)

    await browser.close()

    return ps
}


// (async()=>{
//     await TerabyteLinkListScrapping()
// })()