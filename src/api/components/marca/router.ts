import { Router } from "express";

import MarcaController from "./controller";

const ROUTER: Router = Router();

ROUTER.post("/", MarcaController.addMarca);
ROUTER.get("/", MarcaController.getMarca);



module.exports = ROUTER;
