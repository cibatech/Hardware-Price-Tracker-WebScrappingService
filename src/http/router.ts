import { FastifyInstance } from "fastify";
import { scrapRoute } from "./routes/scrap.route.ts";

export async function Router(app:FastifyInstance) {
    app.addHook("preHandler",(req,res,done)=>{
        console.log({
            Method:req.routeOptions.method,
            Route:req.routeOptions.url,
            body:req.body,
            Params:req.params,
            Headers:req.headers
        })
        done()
    })
    app.register(scrapRoute,{
        prefix:"/scrap"
    })
}