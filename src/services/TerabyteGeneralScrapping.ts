import puppeteer from "puppeteer";

export class ScrapTerbyteUseCase{
    constructor(){}

    async execute(){
        const browser = await puppeteer.launch({
            headless:false
        })
        const page = await browser.newPage();
        await page.goto("https://www.terabyteshop.com.br/",{waitUntil: "networkidle2", timeout: 60000 });
        await page.waitForNavigation()
        await page.focus("#categories-button")
        const categoryList = await page.evaluate(()=>{
            const DOMList = document.querySelector(".wrapper-mega-menu") as HTMLDivElement
            const liList = DOMList.querySelectorAll("li").values
            return DOMList
        })

        console.log(categoryList)

        browser.close()
    }

}


(async()=>{
    const test = new ScrapTerbyteUseCase()
    await test.execute()
})()
