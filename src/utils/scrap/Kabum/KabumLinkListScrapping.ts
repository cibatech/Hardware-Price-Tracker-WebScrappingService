import puppeteer from "puppeteer"
import { KabumLinkCollection } from "../../../collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";

(async()=>{
    const browser =await puppeteer.launch({
        headless:false  
    })
    const page = await browser.newPage();
    await page.setViewport({ width: 320, height: 480 });

    await page.goto(KabumLinkCollection.coreSite);
    await page.waitForNetworkIdle({
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)/2
    })

    //click in the toast to free space for the above code
    await page.click("#ins-editable-button-15380496494")

    //do some clicks to have acess to "departamentos" where we hope to find the a list that will be used to provide the link
    await page.click("#menuHamburguer")
    await page.waitForSelector("li.sc-9a86d81f-9.sc-9a86d81f-10.hHunIe.eelzbs > a")
    await page.click("li.sc-9a86d81f-9.sc-9a86d81f-10.hHunIe.eelzbs > a")
    const ps = await page.evaluate(()=>{
        const domProp = document.querySelector("div.sc-f7bf8a56-5.fEXaZq") as HTMLDivElement;
        const AnchorList = domProp.querySelectorAll("a.sc-f7bf8a56-6.kRYJRi") as NodeListOf<HTMLAnchorElement>
        const linkList:string[] = [];

        for(let i =0;i<AnchorList.length;i++){
            linkList.push(AnchorList[i].href)
        }
        return AnchorList.length
        
    })


    console.log(ps);
    

    await browser.close()
})()