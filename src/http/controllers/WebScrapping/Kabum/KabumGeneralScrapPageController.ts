import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaProductRepository } from "../../../../repositories/PrismaDeploy/PrismaProductRepository";
import { PrismaPriceRepository } from "../../../../repositories/PrismaDeploy/PrismaPriceRepository";
import { KabumScrappingUseCase } from "../../../../services/scrap/Kabum/KabumGeneralScrappingService";
import { Price, Product } from "../../../../../prisma/deploy-output";
import { prisma_dev } from "../../../../lib/prisma";
import { PuppeteerError } from "puppeteer";

export async function KabumGeneralScrapPageController(req:FastifyRequest,res:FastifyReply) {
    const ProdRepo = new PrismaProductRepository();
    const PriceRepo = new PrismaPriceRepository();
    
    //creates here the issue service
    const ScrapService = new KabumScrappingUseCase(ProdRepo,PriceRepo);

    //load Link List for Scrapping EveryThing
    try{
        var priceList:Price[] = [];
        var prodList:Product[] = []
        const prismalist = await prisma_dev.staticLink.findMany({
            where:{
                Where:"Kabum"
            }
        })
        for(let i=0;i<2;i++){
            const acces_link = prismalist[i].Link;
            const response = await ScrapService.excute(acces_link)
            priceList.concat(response.PriceList);
            prodList.concat(response.ProductList)
        }

        res.status(200).send({
            Description:"Scrap Service Completed",
            Status:{
                At:"Kabum",
                TotalLinksScrappedList:prismalist.length,
                AccessedLinksList:prismalist
            },
            Result:{
                prodList,
                priceList,
            }
        })
    }catch(err){
        if(err instanceof PuppeteerError){
            res.status(500).send({
                Description:"Got and Error while running the web scrapping service as full log of this erro will be registered at the database"
            })
        }
    }
}