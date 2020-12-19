"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMarca = exports.addMarca = void 0;
const model_1 = __importDefault(require("../marca/model"));
exports.addMarca = async (data) => {
    try {
        const marca = new model_1.default(data);
        await marca.save();
        return true;
    }
    catch (error) {
        console.error("Error las marcas", error);
        throw {
            message: error.message ? error.message : "Error al traer las marcas",
            code: error.code ? error.code : 500,
        };
    }
};
exports.getMarca = async () => {
    try {
        const marca = await model_1.default.find();
        return marca;
    }
    catch (error) {
        console.error("Error al mostrar las marcas", error);
        throw {
            message: error.message ? error.message : "Error al traer las marcas",
            code: error.code ? error.code : 500,
        };
    }
};
