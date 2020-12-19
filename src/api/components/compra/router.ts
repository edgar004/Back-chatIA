import { Router } from "express";

import CompraController from "./controller";

const ROUTER: Router = Router();

ROUTER.post("/", CompraController.addCompra);


module.exports = ROUTER;
