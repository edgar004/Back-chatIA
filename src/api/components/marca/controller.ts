import { Request, Response } from "express";

import * as MarcaService from "./service";


const addMarca = async (req: Request, res: Response) => {
  try {
    const data = req.body;
     await MarcaService.addMarca(data);
    return res.json({
      ok: true,
      message: "La marca ha sido creado correctamente.",
    });
  } catch (error) {
    const err = {
      code: error.code ? error.code : 500,
      message: error.message ? error.message : "Error al registrar la marca.",
    };

    return res.status(err.code).json({
      message: err.message,
    });
  }
};

const getMarca = async (req: Request, res: Response) => {
  try {
    const marcas = await MarcaService.getMarca();
    return res.json(marcas);
  } catch (error) {
    const err = {
      code: error.code ? error.code : 500,
      message: error.message ? error.message : "Error al cargar las marcas.",
    };

    return res.status(err.code).json({
      message: err.message,
    });
  }
};

const MarcaController = {
  addMarca,
  getMarca
};

export default MarcaController;
