import { Prisma, Scrap } from "../../../prisma/deploy-output";
import { prisma_deploy } from "../../lib/prisma";
import { scrapRefereceRepository } from "../scrapReferenceRepository.";

export class PrismaScrapRepository implements scrapRefereceRepository{
    async create(data: Prisma.ScrapCreateInput): Promise<Scrap> {
        return await prisma_deploy.scrap.create({
            data
        })
    }
}