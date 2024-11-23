import { FastifyInstance } from "fastify";
import { PichauProductScrapController, PichauScrapLinkListController } from "../controllers/WebScrapping/index.ts";

export async function scrapRoute(app:FastifyInstance) {
    app.get("/",PichauProductScrapController)
    app.post("/pichau/links",PichauScrapLinkListController)
}