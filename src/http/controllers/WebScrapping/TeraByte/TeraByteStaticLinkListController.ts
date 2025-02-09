import { FastifyReply, FastifyRequest } from "fastify";
import { TeraByteLinkScrapUseCase } from "../../../../services/scrap/Terabyte/TeraByteLinkCollectionScrappings";
import { PrismaLinkRepository } from "../../../../repositories/PrismaDev/PrismaLinkRepository";
import { PuppeteerError } from "puppeteer";

export async function TeraByteGetStaticLinkController(req:FastifyRequest, res:FastifyReply) {
    
    const l_service = new TeraByteLinkScrapUseCase(new PrismaLinkRepository);
    try{
        const resp =await l_service.execute();
        if(resp.resList[0]){
            res.status(201).send({
                Description:"Successfully Stored Links List",
                Content:resp
            })
        }else{
            res.status(500).send({
                Description:"got an unknow Error"
            })
        }
    }catch(err){
        if(err instanceof PuppeteerError){
            res.status(500).send({
                Description:"Error While Running Scrap Service",
                Content:err.message
            })
        }else{
            res.status(500).send({
                Description:"got an unknow Error"
            })
        }
    }
}