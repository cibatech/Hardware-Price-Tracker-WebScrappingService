import puppeteer from "puppeteer";
import { PichauLinkCollection } from "../../collections/pichauLinkCollection";

interface TransferDataObjectFromDOM{
    Link:string,
    Where:string
}


(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const GlobalList:TransferDataObjectFromDOM[] = []
    await page.setViewport({ width: 1080, height: 1024 });

    const searchList = PichauLinkCollection.subSitesList;
    const PoquireReturnList:TransferDataObjectFromDOM[] = [];

    for (let i = 0; i < searchList.length; i++) {
        const element = searchList[i];

        await page.goto(element, { waitUntil: "networkidle2" });
        const returnList = await page.evaluate(()=>{
            
        })
    }

    console.log(PoquireReturnList);

    await page.close();
    await browser.close();
})();


