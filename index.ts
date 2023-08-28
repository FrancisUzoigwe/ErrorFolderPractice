import express from "express"
import env from "dotenv";
import { mainApp } from "./mainApp";
env.config()



const app = express()

const port: number = parseInt(process.env.PORT!)
const realPort = port 

mainApp(app)
const Server = app.listen(realPort, () => {
    console.log("Server is active on port ", realPort)
})

process.on("uncaughtException", (err) => {
    console.log("")
    console.log("Server is shutting down due to an uncaught exception", err)

    process.exit(1)
})

process.on("unhandledRejection", (reason) => {
    console.log("")
    console.log("Server is shutting down due to an unhandled regjection", reason)

    Server.close(() => {
        process.exit(1)
    })
})