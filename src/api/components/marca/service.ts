import MarcaModel from "../marca/model";
export interface MarcaInterface {
  nombre: string;
  estado:number
}



export const addMarca = async (data:MarcaInterface) => {
  try {
    const marca = new MarcaModel(data);
    await marca.save();
    return true;
  } catch (error) {
    console.error("Error las marcas", error);

    throw {
      message: error.message ? error.message : "Error al traer las marcas",
      code: error.code ? error.code : 500,
    };
  }
};


export const getMarca = async () => {
  try {
    const marca = await MarcaModel.find();
    return marca;
  } catch (error) {
    console.error("Error al mostrar las marcas", error);

    throw {
      message: error.message ? error.message : "Error al traer las marcas",
      code: error.code ? error.code : 500,
    };
  }
};