"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const ReservaService = __importStar(require("./service"));
const getReserva = async (req, res) => {
    try {
        const resp = await ReservaService.getReserva();
        return res.json(resp);
    }
    catch (error) {
        const err = {
            code: error.code ? error.code : 500,
            message: error.message ? error.message : "Error las reservas.",
        };
        return res.status(err.code).json({
            message: err.message,
        });
    }
};
const CancelarReserva = async (req, res) => {
    try {
        const resp = await ReservaService.CancelarReserva(req.body.id);
        return res.json(resp);
    }
    catch (error) {
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
exports.default = CompraController;
