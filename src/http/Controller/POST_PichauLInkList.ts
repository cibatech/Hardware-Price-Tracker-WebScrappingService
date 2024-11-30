import { FastifyReply, FastifyRequest } from "fastify";
import { PuppeteerError } from "puppeteer";
import { PrismaLinkRepository } from "../../repositories/PrismaDev/PrismaLinkRepository";
import { GetPichauLinkListUseCase } from "../../services/scrap/Pichau/GetLinkListFromPichau";

export async function PichauScrapLinkListController(req:FastifyRequest,res:FastifyReply) {
    const repo = new PrismaLinkRepository()
    const l_service = new GetPichauLinkListUseCase(repo);

    try{
        const call_service = await l_service.execute();
        console.log(call_service)
        if(call_service.StaticLinkList[0]){
            res.status(201).send({
                Description:"Successfully Returned Link List for Pichau",
                LiList:call_service.StaticLinkList
            })
        }else{
            res.status(500).send({
                Description:"Got am unknow Error"
            })
        }
    }catch(err){
        if(err instanceof PuppeteerError){
            res.status(500).send({
                Description:"Error while running WebScrapping service"
            })
        }else{
            res.status(500).send({
                Description:err
            })
        }
    }
}