import reservaModel from "../reserva/model";
import compraModel from "../compra/model";
import productoModel from "../producto/model";



export interface StatusCompra {
  correo: string;
  expireAt?:Date;
  id_producto: string;
  id_compra: string;
  cantidad: number;
  precio: number;
}


export const addReserva = async (data:StatusCompra) => {
  try {
    const reserva = new reservaModel(data);
    await reserva.save();

    return true;
  } catch (error) {
    console.error("Error al crear la compra", error);

    throw {
      message: error.message ? error.message : "Error al crear la compra",
      code: error.code ? error.code : 500,
    };
  }
};


export const getReserva = async () => {
  try {
    const reserva = await reservaModel.find().populate('id_producto',{_id:1,nombre:1,img:1})
    return reserva;
  } catch (error) {
    console.error("Error al crear la compra", error);

    throw {
      message: error.message ? error.message : "Error al crear la compra",
      code: error.code ? error.code : 500,
    };
  }
};


export const CancelarReserva = async (id:string) => {
  try {
    const reserva:any = await reservaModel.findByIdAndRemove(id)
  await compraModel.findByIdAndUpdate(reserva.id_compra,{estado:2})
  await productoModel.findByIdAndUpdate(reserva.id_producto,{$inc:{cantidad:reserva.cantidad}})

    return reserva;
  } catch (error) {
    console.error("Error al cancelar la compra", error);

    throw {
      message: error.message ? error.message : "Error al crear la compra",
      code: error.code ? error.code : 500,
    };
  }
};
