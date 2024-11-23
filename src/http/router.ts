import { FastifyInstance } from "fastify";
import { scrapRoute } from "./routes/scrap.route.ts";

export async function Router(app:FastifyInstance) {
    app.register(scrapRoute,{
        prefix:"/scrap/"
    })
}