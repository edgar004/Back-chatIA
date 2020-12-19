import { Schema, model } from "mongoose";


var ReservaProducto = new Schema({
    correo:{type:String},
    expireAt:{type:Date,default: Date.now, expires: 60},
    id_producto:{type:Schema.Types.ObjectId,ref:"Producto"},
    id_compra:{type:Schema.Types.ObjectId,ref:"Compra"},
    cantidad:{type:Number},
    precio:{type:Number},
},{collection:"StatusCompras"})

ReservaProducto.index({expireAt:1},{expireAfterSeconds: 60})
export default model("StatusCompra",ReservaProducto)
    