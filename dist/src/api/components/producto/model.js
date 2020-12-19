"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductoSchema = new mongoose_1.Schema({
    id_marca: { type: mongoose_1.Schema.Types.ObjectId, ref: "Marca", requered: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    img: { type: String, required: true },
    nombre: { type: String, required: true },
}, { collection: "Productos" });
exports.default = mongoose_1.model("Producto", ProductoSchema);
