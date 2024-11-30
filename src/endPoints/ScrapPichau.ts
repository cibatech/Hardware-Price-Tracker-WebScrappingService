import { PuppeteerError } from "puppeteer";
import { PrismaProductRepository } from "../repositories/PrismaDeploy/PrismaProductRepository";
import { PrismaPriceRepository } from "../repositories/PrismaDeploy/PrismaPriceRepository";
import { PichauGeneralScrappingUseCase } from "../services/scrap/Pichau/PichauGeneralScrapping";
import { PichauLinkCollection } from "../collections/StandardLinkCollection";

(async()=>{
    
    const ErrorList:Error[] = [];

    const publicService = new PichauGeneralScrappingUseCase(new PrismaProductRepository,new PrismaPriceRepository)

    var indexControl = 0
    //     const LinkList:StaticLink[] = await prisma_dev.staticLink.findMany({
    //         where:{
    //             Where:"Kabum"
    //         }
    //     })     
    const LinkList = PichauLinkCollection.subSitesList
    async function RecursiveGenScrapFromLinkList(){ 
        //Scrap Service
        const link = LinkList[indexControl]
        var returnp:any[] = []
        try{    
            //chamar o serviço de scrapping e verificar seu resultado
            const resp = await publicService.execute(link)
            console.log(resp)
            returnp = [resp]
        }catch(err){
            if(err instanceof PuppeteerError){
                ErrorList.push(err)
            }
        }
    
        if(indexControl < LinkList.length){
            RecursiveGenScrapFromLinkList();
        }else{
            return returnp
        }
        indexControl++ 
    }

    var ps = await RecursiveGenScrapFromLinkList()
    console.log(ps)
    //issues list later here
})()


