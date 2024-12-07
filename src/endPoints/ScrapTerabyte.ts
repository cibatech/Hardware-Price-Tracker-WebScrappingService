import { PuppeteerError } from "puppeteer";
import { PrismaProductRepository } from "../repositories/PrismaDeploy/PrismaProductRepository";
import { PrismaPriceRepository } from "../repositories/PrismaDeploy/PrismaPriceRepository";
import { TerabyteProductScrapUseCase } from "../services/scrap/Terabyte/TeraByteGeneralScrappingService";
import { TeraByteLinkCollection } from "../collections/StandardLinkCollection";
import { CreateIssueUseCase } from "../services/Issues/CreateissueService";
import { PrismaIssuesRepository } from "../repositories/PrismaDeploy/PrismaIssueRepository";

(async()=>{
    
    const ErrorList:Error[] = [];

    const publicService = new TerabyteProductScrapUseCase(new PrismaProductRepository,new PrismaPriceRepository)
    const ErrorService = new CreateIssueUseCase(new PrismaIssuesRepository)
    var indexControl = 0
    //     const LinkList:StaticLink[] = await prisma_dev.staticLink.findMany({
    //         where:{
    //             Where:"Kabum"
    //         }
    //     })     
    const LinkList = TeraByteLinkCollection.SubSitesList
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
            //toda vez que cometer um erro registrará um issue no banco de dados
            if(err instanceof PuppeteerError){
                const error = await ErrorService.execute({
                    At:"Deploy:Terabyte",
                    Reason:"Internal Puppeteer Error"
                })
                console.log(error)
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


