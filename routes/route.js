import express from "express";
const router = express.Router();
import Zamer from '../controllers/zamer.js'
import zamer from "../controllers/zamer.js";

router.get("/test", Zamer.test)
router.post("/go", Zamer.mongopost)
router.post("/goExtensive", Zamer.mongopostExtensive)

router.get("/heroes", Zamer.getHeroes)
router.get("/filters", Zamer.deleteHero)

router.delete('/deleteHero', Zamer.deleteHero)
router.post('/addHero', Zamer.addHero)

export default router