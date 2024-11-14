import puppeteer from "puppeteer"
import { PichauLinkCollection } from "../../collections/pichauLinkCollection";
import { waitForDebugger } from "inspector";

(async()=>{
    const browser = await puppeteer.launch({
        headless:false
    });
    const page = await browser.newPage();

    await page.goto(PichauLinkCollection.coreSite)

    //aguarda até que tudo carregue devidamente
    await page.waitForNetworkIdle({
        timeout:80000
    })

    await page.click("div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-4.MuiGrid-grid-xl-3 > button.MuiButtonBase-root[aria-label='menu']")

    const ps = await page.evaluate(()=>{
        const DOMCore = document.querySelector(".jss370") as HTMLDivElement;
        const LiList = DOMCore.querySelectorAll("li" ) as NodeListOf<HTMLLIElement>
        var resList:string[] = []

        LiList.forEach(Element=>{
            resList.push(Element.innerHTML)
        })

        return resList
    })
    console.log(ps)
    await browser.close()
})()