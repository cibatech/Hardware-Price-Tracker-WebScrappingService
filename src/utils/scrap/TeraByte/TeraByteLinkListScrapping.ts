import puppeteer from "puppeteer"
import { TeraByteLinkCollection } from "../../../collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";

(async()=>{

    const browser = await puppeteer.launch({
        headless:false
    });

    const page = await browser.newPage();
    
    await page.goto(TeraByteLinkCollection.coreSite);
    await page.waitForNetworkIdle({
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)/2
    })


    const ps = await page.evaluate(()=>{
        const DOMList = document.querySelector("ul.mm--open") as HTMLUListElement;
        
        const LiContent = DOMList.querySelectorAll("li.mmli > a") as NodeListOf<HTMLAnchorElement>;
        const linkList:string[] = [];

        for(let i =0;i<LiContent.length;i++){
            const e = LiContent[i];
            linkList.push(e.href);
        }
        
        return linkList
    })

    console.log(ps)
    await browser.close()
})()