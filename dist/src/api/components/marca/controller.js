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
const MarcaService = __importStar(require("./service"));
const addMarca = async (req, res) => {
    try {
        const data = req.body;
        await MarcaService.addMarca(data);
        return res.json({
            ok: true,
            message: "La marca ha sido creado correctamente.",
        });
    }
    catch (error) {
        const err = {
            code: error.code ? error.code : 500,
            message: error.message ? error.message : "Error al registrar la marca.",
        };
        return res.status(err.code).json({
            message: err.message,
        });
    }
};
const getMarca = async (req, res) => {
    try {
        const marcas = await MarcaService.getMarca();
        return res.json(marcas);
    }
    catch (error) {
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
exports.default = MarcaController;
