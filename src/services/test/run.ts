import puppeteer from "puppeteer";
import { PichauLinkCollection } from "../../collections/pichauLinkCollection";
import { randomUUID } from "crypto";

interface TransferDataObjectFromDOM{
    Link:string,
    Where:string,
    image:string | null,
    description:string | null,
}


(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.setViewport({ width: 1080, height: 1024 });

    const searchList = PichauLinkCollection.subSitesList;
    const PoquireReturnList:TransferDataObjectFromDOM[] = [];

    await page.goto(searchList[0], { waitUntil: "networkidle2",timeout:60000 });
    
    await page.waitForNetworkIdle({timeout:40000})
    const Ps = await page.evaluate(()=>{
        const DOMList = document.querySelector(".MuiGrid-root.MuiGrid-container.MuiGrid-spacing-xs-3") as HTMLDivElement
        const iDivList = DOMList.querySelectorAll(".MuiGrid-root.MuiGrid-item.MuiGrid-grid-xs-6.MuiGrid-grid-sm-6.MuiGrid-grid-md-4.MuiGrid-grid-lg-3.MuiGrid-grid-xl-2") as NodeListOf<HTMLDivElement>

        var prepList:TransferDataObjectFromDOM[] = [];

        for(let i=0;i<iDivList.length;i++){
            
            const element = iDivList[i];
            if(element){
                const aReference = element.querySelector("a") as HTMLAnchorElement;
                const imgReference = element.querySelector("img") as HTMLImageElement;
                const h2Reference = element.querySelector("h2");
            
                if(h2Reference){
                    const prepCon:TransferDataObjectFromDOM = {
                        Link:aReference.href,
                        Where:window.location.href,
                        description:h2Reference.innerHTML,
                        image:imgReference?imgReference.src:null
                    }
                    prepList.push(prepCon)
                }else{
                    return new Error("Cant get DOM")
                }
            }
        }
        if(prepList[0]){
            return prepList
        }else{
            return false
        }
    })

    console.log(Ps);

    await page.close();
    await browser.close();
})();


        // page.screenshot({
        //     type:"png",
        //     path:`./${randomUUID()}.png`,
        // })