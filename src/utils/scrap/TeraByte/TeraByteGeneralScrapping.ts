import puppeteer from "puppeteer"
import { TeraByteLinkCollection } from "../../../collections/StandardLinkCollection";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env";

export async function ScrapTerabyteProductListFromAPage(queryParam:string):Promise<TransferDataObjectFromDOM[]>{
     //cria uma instancia de um browser
     const browser = await puppeteer.launch({
        headless:false
    })
    //Abre uma nova pagina
    const page  = await browser.newPage();

    //ir até o site desejado
    await page.goto(TeraByteLinkCollection.SubSitesList[0]);
    await page.waitForNetworkIdle({
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)
    })

    await page.waitForSelector(".products-grid")
    const ps:TransferDataObjectFromDOM[] = await page.evaluate(()=>{
        const DOM = document.querySelector(".products-grid") as HTMLDivElement
        const ItensList = DOM.querySelectorAll("div.product-item") as NodeListOf<HTMLDivElement>
        const resList:TransferDataObjectFromDOM[] = []

        ItensList.forEach(Element=>{
            const aElement = Element.querySelector("a.product-item__image") as HTMLAnchorElement
            const HToDescription = Element.querySelector("h2") as HTMLHeadingElement
            const imgToLink = Element.querySelector("img.image-thumbnail") as HTMLImageElement
            const SpanForprice = Element.querySelector("div.product-item__new-price > span") as HTMLSpanElement
            const t:TransferDataObjectFromDOM = {
                description:String(HToDescription.innerHTML),
                image:imgToLink.src,
                Link:aElement.href,
                Where:window.location.href.replace("https://www.terabyteshop.com.br","").replace("/",""),
                Price:Number(SpanForprice.innerHTML.replace(",",".").replace(/[^0-9.]/g, '')),
                Title:String(HToDescription.innerHTML)
            }
            resList.push(t)
        })

        return resList

    })
    console.log(ps);
    
    //closes the browser
    browser.close()

    return ps
}

(async()=>{
    await ScrapTerabyteProductListFromAPage("https://www.terabyteshop.com.br/hardware")
})()
