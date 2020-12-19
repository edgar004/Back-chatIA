import { Request, Response } from "express";

import * as productoService from "./service";

const getProducto = async (req: Request, res: Response) => {
  try {
    const productos = await productoService.getProducto();
    res.json(productos);
  } catch (error) {
    const err = {
      code: error.code ? error.code : 500,
      message: error.message ? error.message : "Error al traer los productos.",
    };

    return res.status(err.code).json({
      message: err.message,
    });
  }
};


const addProducto = async (req: Request, res: Response) => {
  try {
    const data = req.body;
     await productoService.addProducto(data);
    return res.json({
      ok: true,
      message: "El producto ha sido creado correctamente.",
    });
  } catch (error) {
    const err = {
      code: error.code ? error.code : 500,
      message: error.message ? error.message : "Error al traer los productos.",
    };

    return res.status(err.code).json({
      message: err.message,
    });
  }
};

const ProductoController = {
    getProducto,
    addProducto
};

export default ProductoController;
