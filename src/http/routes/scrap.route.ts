import { FastifyInstance } from "fastify";
import { PichauProductScrapController, PichauScrapLinkListController, TeraByteGetStaticLinkController } from "../controllers/WebScrapping/index.ts";
import { dropLinksTableBeforeAddingNewLinks } from "../midlewares/DropLinkListBeforeAddingMoreLinks.ts";

export async function scrapRoute(app:FastifyInstance) {
    app.get("/",PichauProductScrapController)

    //Links Scrapping routes
    app.post("/pichau/links",{
        preHandler:[dropLinksTableBeforeAddingNewLinks]
    },PichauScrapLinkListController)

    app.post("/terabyte/links",{
        preHandler:[dropLinksTableBeforeAddingNewLinks]
    },TeraByteGetStaticLinkController)
}