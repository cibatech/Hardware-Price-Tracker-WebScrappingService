import { FastifyInstance } from "fastify";
import { PichauProductScrap } from "../controllers/WebScrapping/index.ts";

export async function scrapRoute(app:FastifyInstance) {
    app.get("/",PichauProductScrap)
}