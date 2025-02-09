
import { Prisma, StaticLink } from "../../../prisma/deploy-output";
import { StaticLinkRepository } from "../StaticLink.repository";


export class InMemoryStaticLinkRepository implements StaticLinkRepository{
    public itens:StaticLink[] = []

    async create(data: Prisma.StaticLinkCreateInput): Promise<StaticLink> {
        const Link:StaticLink = {
            GeneratedAt:new Date(),
            Id:this.itens.length+1,
            Link:String(data.Link),
            Where:String(data.Where)
        }
        this.itens.push(Link)
        return Link
    }
    async delete(id: number): Promise<StaticLink | null> {
        const Lid = this.itens.findIndex(item=> item.Id == id);
        const link = this.itens[Lid]
        this.itens.slice(Lid)
        return link
    }
    async deleteAll(): Promise<Prisma.BatchPayload> {
        const oldSize = this.itens.length
        this.itens = [];
        return {
            count:oldSize
        }
    }
}