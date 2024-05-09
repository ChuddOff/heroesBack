import express from 'express'

const app = express()

const cors = app.use((req, res, next) => {
    if (req.method == "OPTIONS") {
        res.header("Access-Control-Allow-Origin", `${process.env.API_CLIENT_URL}`)
        res.header("Access-Control-Allow-Headers", "X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method,Access-Control-Request-Headers, Authorization, withcredentials, credentials")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Credentials", true)
        res.header("Access-Control-Expose-Headers", "Authorization")
    }
    if (req.method == "GET") {
        res.header("Access-Control-Allow-Origin", `${process.env.API_CLIENT_URL}`)
    }
    if (req.method == "POST") {
        res.header("Access-Control-Allow-Origin", `${process.env.API_CLIENT_URL}`)
    }
    if(req.method == "PUT") {
        res.header("Access-Control-Allow-Origin", `${process.env.API_CLIENT_URL}`)
    }
    if(req.method == "DELETE") {
        res.header("Access-Control-Allow-Origin", `${process.env.API_CLIENT_URL}`)
    }
    next()
  }) 

export default cors