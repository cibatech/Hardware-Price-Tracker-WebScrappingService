import puppeteer from "puppeteer"
import { TeraByteLinkCollection } from "../../../collections/StandardLinkCollection";
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface";

(async()=>{
    //cria uma instancia de um browser
    const browser = await puppeteer.launch({
        headless:false
    })
    //Abre uma nova pagina
    const page  = await browser.newPage();

    //ir até o site desejado
    await page.goto(TeraByteLinkCollection.SubSitesList[0]);
    await page.waitForNetworkIdle({
        timeout:80000
    })

    const ps = await page.evaluate(()=>{
        const DOM = document.querySelector(".products-grid") as HTMLDivElement
        const ItensList = DOM.querySelectorAll("div.product-item") as NodeListOf<HTMLDivElement>
        const resList:TransferDataObjectFromDOM[] = []

        ItensList.forEach(Element=>{
            const aElement = Element.querySelector("a.product-item__name") as HTMLAnchorElement
            const HToDescription = aElement.querySelector("h2") as HTMLHeadingElement
            const imgToLink = Element.querySelector("img.image-thumbnail") as HTMLImageElement
            const SpanForprice = Element.querySelector("div.product-item__new-price > span") as HTMLSpanElement
            const t:TransferDataObjectFromDOM = {
                description:HToDescription.innerHTML,
                image:imgToLink.src,
                Link:aElement.href,
                Where:window.location.href,
                Price:Number(SpanForprice.innerHTML.replace(",",".").replace(/[^0-9.]/g, ''))
            }
            resList.push(t)
        })

        return resList

    })

    console.log(ps)
    browser.close()
})()