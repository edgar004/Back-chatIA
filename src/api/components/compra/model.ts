import { Schema, model } from "mongoose";


const CompraSchema = new Schema(
  {
    id_producto: { type: Schema.Types.ObjectId, ref: "Producto", requered: true },
    fecha: { type: Date,default:new Date(), required: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    total: { type: Number, required: true },
    correo: { type: String, required: true },
    estado: { type: Number, default:1 },
  },
  { collection: "Compras" }
);

export default model("Compra", CompraSchema);
