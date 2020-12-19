"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addProducto = exports.getProducto = void 0;
const model_1 = __importDefault(require("../producto/model"));
exports.getProducto = async () => {
    try {
        const resp = await model_1.default.find();
        return resp;
    }
    catch (error) {
        console.error("Error al traer los productos", error);
        throw {
            message: error.message ? error.message : "Error al traer los productos",
            code: error.code ? error.code : 500,
        };
    }
};
exports.addProducto = async (data) => {
    try {
        const producto = new model_1.default(data);
        await producto.save();
        return true;
    }
    catch (error) {
        console.error("Error al agregar los productos", error);
        throw {
            message: error.message ? error.message : "Error al traer los productos",
            code: error.code ? error.code : 500,
        };
    }
};
