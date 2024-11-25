import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { PrismaLinkRepository } from "../../repositories/PrismaDev/PrismaLinkRepository";
/**
 * Deletes all entries in the Links table before adding new links.
 * 
 */
export async function dropLinksTableBeforeAddingNewLinks(req:FastifyRequest,res:FastifyReply) {
    const prismaDb = new PrismaLinkRepository();
    //deletes every Link resgistry inside the database
    prismaDb.deleteAll()
}