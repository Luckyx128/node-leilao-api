import { Router } from "express";
import LancesController from "../controllers/lancesController";
const lancesRouter = Router()

lancesRouter.post("/lance",LancesController.realizarLance)


export default lancesRouter;