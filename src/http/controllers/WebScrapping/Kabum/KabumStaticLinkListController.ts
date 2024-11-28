import { FastifyReply, FastifyRequest } from "fastify";
import { KabumScrappingUseCase } from "../../../../services/scrap/Kabum/KabumGeneralScrappingService";
import { PrismaProductRepository } from "../../../../repositories/PrismaDeploy/PrismaProductRepository";
import { PrismaPriceRepository } from "../../../../repositories/PrismaDeploy/PrismaPriceRepository";
import { PuppeteerError } from "puppeteer";
import { prisma_dev } from "../../../../lib/prisma";
import { Price, Product } from "../../../../../prisma/deploy-output";

export async function KabumStaticLinkListController(req:FastifyRequest,res:FastifyReply) {
    
    

}