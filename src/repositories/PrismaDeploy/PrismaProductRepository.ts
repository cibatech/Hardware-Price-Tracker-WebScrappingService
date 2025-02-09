import { Prisma, Product } from "../../../prisma/deploy-output";
import { prisma_deploy } from "../../lib/prisma";
import { ProductRepository } from "../Product.repository,";

export class PrismaProductRepository implements ProductRepository{
    async create(data: Prisma.ProductCreateInput): Promise<Product> {
        return await prisma_deploy.product.create({
            data
        })
    }
    async delete(uuid: string): Promise<Product | null> {
        return await prisma_deploy.product.delete({
            where:{
                Id:uuid
            }
        })
    }
    async findById(uuid: string): Promise<Product | null> {
        return await prisma_deploy.product.findUnique({
            where:{
                Id:uuid
            }
        })
    }
    async findByLink(link: string): Promise<Product | null> {
        return await prisma_deploy.product.findFirst({
            where:{
                Link:link
            }
        })
    }
    async findBySlug(Slug: string): Promise<Product | null> {
        return await prisma_deploy.product.findFirst({
            where:{
                Slug
            }
        })
    }
    async update(uuid: string, data: Prisma.ProductUpdateInput): Promise<Product> {
        return await prisma_deploy.product.update({
            where:{
                Id:uuid
            },
            data
        })
    }
}