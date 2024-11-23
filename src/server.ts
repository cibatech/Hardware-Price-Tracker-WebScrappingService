import fastify from "fastify";
import { Server } from "http";
import { HOST, PORT } from "./lib/env";

const app = fastify()


app.listen({
    port:Number(PORT),
    host:HOST
},(err,path)=>{
    console.log(err||path);
})