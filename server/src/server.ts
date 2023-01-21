import fastify from "fastify"
import cors from '@fastify/cors'
import { appRoutes } from "./lib/routes"
const app = fastify()

app.register(cors)
app.register(appRoutes)
//O get é um Método HTTP, o qual contém: Get, Post, Put, Patch, Delete


app.listen({
    port: 3333,
    host: '0.0.0.0',
}).then(() => {
    console.log("Server funcionando!")
})