import { Prisma, StaticLink } from "../../prisma/deploy-output"

export interface StaticLinkRepository {
    create(data:Prisma.StaticLinkCreateInput):Promise<StaticLink>
    delete(id:number):Promise<StaticLink|null>
    deleteAll():Promise<Prisma.BatchPayload>
}