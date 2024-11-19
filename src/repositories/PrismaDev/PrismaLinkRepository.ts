import { Prisma, StaticLink } from "../../../prisma/indev-output";
import { prisma_dev } from "../../lib/prisma";
import { StaticLinkRepository } from "../StaticLink.repository";

export class PrismaLinkRepository implements StaticLinkRepository{
    async create(data: Prisma.StaticLinkCreateInput): Promise<StaticLink> {
        const create = await prisma_dev.staticLink.create({
            data
        })
        return create
    }
    async delete(id: number): Promise<StaticLink | null> {
        const deleted = await prisma_dev.staticLink.delete({
            where:{
                Id:id
            }
        })
        return deleted
    }
}