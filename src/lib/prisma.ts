import { PrismaClient as Prisma_deploy } from "../../prisma/deploy-output";
import { PrismaClient as Prisma_dev } from "../../prisma/indev-output";

//database during development
export const prisma_dev = new Prisma_dev()

//database to deploy 
export const prisma_deploy = new Prisma_deploy()