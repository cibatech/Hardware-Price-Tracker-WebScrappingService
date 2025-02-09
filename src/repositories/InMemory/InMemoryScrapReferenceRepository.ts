import { Prisma, Scrap } from "../../../prisma/deploy-output";
import { scrapRefereceRepository } from "../scrapReferenceRepository.";

export class InMemoryScrapReference implements scrapRefereceRepository{
    private list:Scrap[] = []
    async create(data: Prisma.ScrapCreateInput): Promise<Scrap> {
        const scrap:Scrap = {
            CreatedAt:new Date(),Id:this.list.length+1,Scraped:"RandomAdress"
        }
        return scrap
    }
}