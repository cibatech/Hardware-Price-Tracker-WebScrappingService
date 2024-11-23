import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaProductRepository } from "../../../../repositories/PrismaDeploy/PrismaProductRepository.ts";
import { PichauGeneralScrappingUseCase } from "../../../../services/scrap/Pichau/PichauGeneralScrapping.ts";
import { PuppeteerError } from "puppeteer";

export async function PichauProductScrap(req:FastifyRequest,res:FastifyReply) {
    const repo = new PrismaProductRepository()
    const m_service = new PichauGeneralScrappingUseCase(repo)

    try{
        
    }catch(err){
        if(err instanceof PuppeteerError){
            res.status(500).send({
                Description:"Got an error while running Scrap service",
            })
        }
    }
}