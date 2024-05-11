import express from 'express';
import 'dotenv/config';
import zamer from './routes/route.js';
import { MongoClient, ServerApiVersion } from  'mongodb';
import mongoose, {Model} from 'mongoose';
import cors from './middlewares/cors.js'
import logger from './middlewares/logger.js'
// import {Server} from 'socket.io';
// import {createServer} from 'http';
// import socketEventRouter from './socket/socket.js';


const port = process.env.PORT ?? 4000;

const app = express();
app.use(express.json());
app.use(logger)
app.use(cors)
app.use("/api/zamer", zamer)


// const server = createServer(app);
// const io = new Server(server, {
//     cors: {
//         origin: `${process.env.API_CLIENT_URL}`,
//         methods: ["GET", "POST", "PUT", "DELETE"]
//     }
// })
// io.on('connection', socket => {
//     socketEventRouter(io, socket)
// })


app.get('/', (req, res) => {
    res.json("text");
})

mongoose.connect(
    process.env.MONGO_URI,
    {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        }
    }
).then(()=>console.log('connected')).catch(e=>console.log(e));


app.listen(port)