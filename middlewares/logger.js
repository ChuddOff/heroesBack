import express from 'express'
import fs from 'fs'
import path from 'path'

const app = express()
const Logs = path.join(process.cwd(), `logs`, `logs.txt`)

const logger = app.use((req, res, next) => {
    const time = new Date() 
    const hours = time.getUTCHours() + 5 
    let mins = time.getUTCMinutes() 

    if (mins < 10) {
        mins = `0${mins}`
    }

    const type = req.method 
    const url = req.url
    const body = JSON.stringify(req.body) || null 

    const log = `[LOG] [${hours}:${mins}] [${type}] [${url}] request Body: ${body}\n` 

    console.log(log)

    next()
})

export default logger