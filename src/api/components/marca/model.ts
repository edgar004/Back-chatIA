import { Schema, model } from "mongoose";

const MarcaSchema = new Schema(
  {
    nombre: { type: String, required: true },
  },
  { collection: "Marcas" }
);

export default model("Marca", MarcaSchema);
