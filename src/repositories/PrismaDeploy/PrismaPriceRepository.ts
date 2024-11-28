import { Prisma, Price } from "../../../prisma/deploy-output";
import { prisma_deploy } from "../../lib/prisma";
import { PriceReferenceRepository } from "../PriceReference.repository";

export class PrismaPriceRepository implements PriceReferenceRepository{
    async create(data: Prisma.PriceUncheckedCreateInput): Promise<Price> {
        const created = await prisma_deploy.price.create({
            data
        })
        return created
    }
    async delete(uuid: string): Promise<Price | null> {
        const deleted = await prisma_deploy.price.delete({
            where:{
                Id:uuid
            }
        })
        return deleted
    }

    async findById(uuid: string): Promise<Price | null> {
        const returned = await prisma_deploy.price.findUnique({
            where:{
                Id:uuid
            }
        })
        return returned
    }
    async findByProduct(prodId: string): Promise<Price[] | null> {
        const returnList = await prisma_deploy.price.findMany({
            where:{
                ProdId:prodId
            }
        })
        return returnList
    }
    async update(uuid: string, data: Prisma.PriceUpdateInput): Promise<Price> {
        const updated = await prisma_deploy.price.update({
            where:{
                Id:uuid
            },
            data
        })
        return updated
    }
}