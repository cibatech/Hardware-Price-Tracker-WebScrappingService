import puppeteer from "puppeteer"
import { PichauLinkCollection } from "../../../collections/StandardLinkCollection";
import { waitForDebugger } from "inspector";

interface linkList{
    Link:string,
}

export async function PichauScrapCaregoyLinks():Promise<string[]> {
    const browser = await puppeteer.launch({
        headless:true
    });
    const page = await browser.newPage();

    // page.on('requestfailed', request => {
    //     console.error(`Request failed: ${request.url()}`);
    //   });

    await page.goto(PichauLinkCollection.coreSite)

    //aguarda até que tudo carregue devidamente
    await page.waitForNetworkIdle({
        timeout:80000
    })
    await page.waitForSelector("div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-4.MuiGrid-grid-xl-3 > button.MuiButtonBase-root[aria-label='menu']")
    await page.click("div.MuiGrid-root.MuiGrid-item.MuiGrid-grid-md-4.MuiGrid-grid-xl-3 > button.MuiButtonBase-root[aria-label='menu']")
    await page.waitForSelector("div.MuiPaper-root.MuiDrawer-paper.MuiDrawer-paperAnchorLeft.MuiPaper-elevation16")
    
    // page.on('pageerror', error => {
    //     console.error('Page on pageerror:', error);
    // });

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
    const pp:string[] = []
    ps.forEach((e)=>{
        pp.push(e.Link);
    })

    return pp
}
    
// (async()=>{
//     PichauScrapCaregoyLinks()
// })()    