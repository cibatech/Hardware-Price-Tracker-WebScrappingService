import puppeteer from "puppeteer"
import { KabumLinkCollection } from "../../../collections/StandardLinkCollection";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";

(async()=>{
    const browser =await puppeteer.launch({
        headless:false  
    })
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1024 });

    await page.goto(KabumLinkCollection.coreSite);
    await page.waitForNetworkIdle({
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)/2
    })

    await page.click("#menuHamburguer")
})()