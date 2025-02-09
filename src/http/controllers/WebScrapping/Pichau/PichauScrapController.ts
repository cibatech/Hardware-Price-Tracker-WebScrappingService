import { FastifyReply, FastifyRequest } from "fastify";
import { PrismaProductRepository } from "../../../../repositories/PrismaDeploy/PrismaProductRepository.ts";
import { PichauGeneralScrappingUseCase } from "../../../../services/scrap/Pichau/PichauGeneralScrapping.ts";
import { PuppeteerError } from "puppeteer";
import { prisma_deploy, prisma_dev } from "../../../../lib/prisma.ts";

export async function PichauProductScrapController(req:FastifyRequest,res:FastifyReply) {
    const repo = new PrismaProductRepository()
    
    const m_service = new PichauGeneralScrappingUseCase(repo)

    try{
        const linkList = await prisma_dev.staticLink.findMany({
            where:{
                Where:"Pichau"
            }
        })    
    }catch(err){
        if(err instanceof PuppeteerError){
            res.status(500).send({
                Description:"Got an error while running Scrap service",
            })
        }
    }
}