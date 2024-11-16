import "dotenv/config"
import { z } from "zod"

export const {HOST,NODE_ENV,PORT,WS_API_DEFAULT_PAGE_lOAD_TIME} = z.object({
    NODE_ENV:z.enum(["dev","deploy"]).default("dev"),
    HOST:z.string(),
    PORT:z.string(),
    WS_API_DEFAULT_PAGE_lOAD_TIME:z.string()
}).parse(process.env)