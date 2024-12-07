
import { Prisma, StaticLink } from "../../../prisma/deploy-output";
import { prisma_deploy } from "../../lib/prisma";
import { StaticLinkRepository } from "../StaticLink.repository";

export class PrismaLinkRepository implements StaticLinkRepository{
    async create(data: Prisma.StaticLinkCreateInput): Promise<StaticLink> {
        const create = await prisma_deploy.staticLink.create({
            data
        })
        return create
    }
    async delete(id: number): Promise<StaticLink | null> {
        const deleted = await prisma_deploy.staticLink.delete({
            where:{
                Id:id
            }
        })
        return deleted
    }
    async deleteAll():Promise<Prisma.BatchPayload>{
        const deleted = await prisma_deploy.staticLink.deleteMany()
        return deleted;
    }
}