"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
var ReservaProducto = new mongoose_1.Schema({
    correo: { type: String },
    expireAt: { type: Date, default: Date.now, expires: 60 },
    id_producto: { type: mongoose_1.Schema.Types.ObjectId, ref: "Producto" },
    id_compra: { type: mongoose_1.Schema.Types.ObjectId, ref: "Compra" },
    cantidad: { type: Number },
    precio: { type: Number },
}, { collection: "StatusCompras" });
ReservaProducto.index({ expireAt: 1 }, { expireAfterSeconds: 60 });
exports.default = mongoose_1.model("StatusCompra", ReservaProducto);
