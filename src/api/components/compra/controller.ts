import { Request, Response } from "express";

import * as CompraService from "./service";

const addCompra = async (req: Request, res: Response) => {
  try {
    const data = req.body;
     await CompraService.addCompra(data);
    return res.json({
      ok: true,
      message: "La compra se ha realizado correctamente.",
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

const CompraController = {
    addCompra
};

export default CompraController;
