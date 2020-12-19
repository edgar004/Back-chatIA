import { Request, Response } from "express";

import * as ReservaService from "./service";

const getReserva = async (req: Request, res: Response) => {
  try {
     const resp=await ReservaService.getReserva();
    return res.json(resp);
  } catch (error) {
    const err = {
      code: error.code ? error.code : 500,
      message: error.message ? error.message : "Error las reservas.",
    };

    return res.status(err.code).json({
      message: err.message,
    });
  }
};

const CancelarReserva = async (req: Request, res: Response) => {
  try {
     const resp=await ReservaService.CancelarReserva(req.body.id);
    return res.json(resp);
  } catch (error) {
    const err = {
      code: error.code ? error.code : 500,
      message: error.message ? error.message : "Error las reservas.",
    };

    return res.status(err.code).json({
      message: err.message,
    });
  }
};

const CompraController = {
  getReserva,
  CancelarReserva
};

export default CompraController;
