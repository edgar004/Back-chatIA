import { Router } from "express";

import ProductoController from "./controller";

const ROUTER: Router = Router();

ROUTER.get("/", ProductoController.getProducto);
ROUTER.post("/", ProductoController.addProducto);


module.exports = ROUTER;
