import productoModel from "../producto/model";
export interface ProductoInterface {
  id_marca: string;
  id_categoria: string;
  cantidad: number;
  precio: number;
  img: string;
}


export const getProducto = async () => {
  try {
    const resp: any = await productoModel.find();
    return resp;
  } catch (error) {
    console.error("Error al traer los productos", error);

    throw {
      message: error.message ? error.message : "Error al traer los productos",
      code: error.code ? error.code : 500,
    };
  }
};

export const addProducto = async (data:ProductoInterface) => {
  try {
    const producto = new productoModel(data);
    await producto.save();
    return true;
  } catch (error) {
    console.error("Error al agregar los productos", error);

    throw {
      message: error.message ? error.message : "Error al traer los productos",
      code: error.code ? error.code : 500,
    };
  }
};
