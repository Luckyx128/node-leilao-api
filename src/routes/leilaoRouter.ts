import {Router} from "express";
import leilaoController from "../controllers/leilaoController";
const leilaoRouter = Router()

leilaoRouter.get("/leiloes",leilaoController.listLeiloes)
leilaoRouter.get("/leilao/:id",leilaoController.consultLeilao)
export default leilaoRouter