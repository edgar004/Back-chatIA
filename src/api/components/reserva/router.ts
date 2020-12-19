import { Router } from "express";

import CompraController from "./controller";

const ROUTER: Router = Router();

ROUTER.get("/", CompraController.getReserva);
ROUTER.post("/", CompraController.CancelarReserva);



module.exports = ROUTER;
