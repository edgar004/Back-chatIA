"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelarReserva = exports.getReserva = exports.addReserva = void 0;
const model_1 = __importDefault(require("../reserva/model"));
const model_2 = __importDefault(require("../compra/model"));
const model_3 = __importDefault(require("../producto/model"));
exports.addReserva = async (data) => {
    try {
        const reserva = new model_1.default(data);
        await reserva.save();
        return true;
    }
    catch (error) {
        console.error("Error al crear la compra", error);
        throw {
            message: error.message ? error.message : "Error al crear la compra",
            code: error.code ? error.code : 500,
        };
    }
};
exports.getReserva = async () => {
    try {
        const reserva = await model_1.default.find().populate('id_producto', { _id: 1, nombre: 1, img: 1 });
        return reserva;
    }
    catch (error) {
        console.error("Error al crear la compra", error);
        throw {
            message: error.message ? error.message : "Error al crear la compra",
            code: error.code ? error.code : 500,
        };
    }
};
exports.CancelarReserva = async (id) => {
    try {
        const reserva = await model_1.default.findByIdAndRemove(id);
        await model_2.default.findByIdAndUpdate(reserva.id_compra, { estado: 2 });
        await model_3.default.findByIdAndUpdate(reserva.id_producto, { $inc: { cantidad: reserva.cantidad } });
        return reserva;
    }
    catch (error) {
        console.error("Error al cancelar la compra", error);
        throw {
            message: error.message ? error.message : "Error al crear la compra",
            code: error.code ? error.code : 500,
        };
    }
};
