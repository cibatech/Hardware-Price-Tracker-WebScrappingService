import { Prisma, Scrap } from "../../prisma/deploy-output";

export interface scrapRefereceRepository{
    create(data:Prisma.ScrapCreateInput):Promise<Scrap>
}