"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const CompraSchema = new mongoose_1.Schema({
    id_producto: { type: mongoose_1.Schema.Types.ObjectId, ref: "Producto", requered: true },
    fecha: { type: Date, default: new Date(), required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    total: { type: Number, required: true },
    correo: { type: String, required: true },
    estado: { type: Number, default: 1 },
}, { collection: "Compras" });
exports.default = mongoose_1.model("Compra", CompraSchema);
