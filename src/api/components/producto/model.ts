import { Schema, model } from "mongoose";

const ProductoSchema = new Schema(
  {
    id_marca: { type: Schema.Types.ObjectId, ref: "Marca", requered: true },
    cantidad: { type: Number, required: true },
    precio: { type: Number, required: true },
    img: { type: String, required: true },
    nombre: { type: String, required: true },
  },
  { collection: "Productos" }
);

export default model("Producto", ProductoSchema);
