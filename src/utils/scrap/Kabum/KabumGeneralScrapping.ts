import puppeteer from "puppeteer"
import { KabumLinkCollection } from "../../../collections/StandardLinkCollection"
import { TransferDataObjectFromDOM } from "../../../collections/domRecieverInterface"
import { WS_API_DEFAULT_PAGE_lOAD_TIME } from "../../../lib/env"

export async function KabumGeneralScrapping(queryParam:string) {
    const browser = await puppeteer.launch({
        headless:false
    })
    const page =  await browser.newPage()
    await page.goto(queryParam);

    //Aguarda o carregamento da pagina
    await page.waitForNetworkIdle({
        timeout:Number(WS_API_DEFAULT_PAGE_lOAD_TIME)
    })

    //garante que o seletor principal vai ser retornado
    await page.waitForSelector("main.sc-1be01e1c-9.bpRSSD")
    //função executada no DOM da pagina
    const ps:TransferDataObjectFromDOM[] = await page.evaluate(()=>{
        const DOM = document.querySelector("main.sc-1be01e1c-9.bpRSSD");
        const ContainerList = DOM?.querySelectorAll("a") as NodeListOf<HTMLAnchorElement>;
        const returnList:TransferDataObjectFromDOM[] = []

        for(let i=0;i<ContainerList.length;i++){
            const element = ContainerList[i]
            const GetSpanElementFromH3 = element.querySelector("span.sc-d79c9c3f-0.nlmfp.sc-27518a44-9.iJKRqI.nameCard") as HTMLSpanElement
            const GetImageElementForLink = element.querySelector("img") as HTMLImageElement
            const GetPriceFromElement = element.querySelector("span.priceCard.sc-57f0fd6e-2 ") as HTMLSpanElement
            const GetAtRent = element.querySelector("b") as HTMLBRElement

            const price = GetPriceFromElement.innerHTML.replace("R$&nbsp;","")

            // alert(price)
            if(GetPriceFromElement.textContent){
                let prop:TransferDataObjectFromDOM = {
                    description:GetSpanElementFromH3.innerHTML,
                    Where:window.location.href.replace("https://www.kabum.com.br","").replace("/",""), // remove o url deixando apenas a categoria 
                    image:GetImageElementForLink.src,
                    Link:element.href,
                    Price:parseFloat(price),
                    Title:GetSpanElementFromH3.innerHTML,
                    AtRent:GetAtRent?GetAtRent.innerHTML:null
                }
                returnList.push(prop)
            }
        }
        return returnList
    })
    console.log(ps)

    browser.close()


    return ps
}
// (async()=>{
//     await KabumGeneralScrapping("https://www.kabum.com.br/hardware")
// })()