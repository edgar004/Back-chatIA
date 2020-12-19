"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const MarcaSchema = new mongoose_1.Schema({
    nombre: { type: String, required: true },
}, { collection: "Marcas" });
exports.default = mongoose_1.model("Marca", MarcaSchema);
