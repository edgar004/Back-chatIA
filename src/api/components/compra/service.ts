import compraModel from "../compra/model";
import productoModel from "../producto/model";
import * as  reservaService from "../reserva/service";


import {CORREO_MSJ,CLAVE_MSJ} from "../../../config/enviroment";

const nodemailer = require('nodemailer');


export interface CompraInterface {
  id_producto: string;
  fecha:Date;
  cantidad: number;
  precio: number;
  total: number;
  correo: string;
}


export const addCompra = async (data:CompraInterface) => {
  try {
    const compra = new compraModel(data);
   const newCompra= await compra.save();
    const resp:any = await productoModel.findByIdAndUpdate(data.id_producto,{$inc:{cantidad:-data.cantidad}})

    const producto={
        nombre:resp.nombre,
        cantidad:data.cantidad,
        precio:data.precio,
        img:resp.img
    }

    enviarCorreo(data.correo,producto)

    const reserva={
        correo: data.correo,
        id_producto: data.id_producto,
        id_compra: newCompra._id,
        cantidad: data.cantidad,
        precio: data.precio
    }
    await reservaService.addReserva(reserva)
    return true;
  } catch (error) {
    console.error("Error al crear la compra", error);

    throw {
      message: error.message ? error.message : "Error al crear la compra",
      code: error.code ? error.code : 500,
    };
  }
};



const enviarCorreo = (correo: string,producto:{nombre:string,cantidad:number,precio:number,img:string}) => {
  var transporter = nodemailer.createTransport({
      host:"smtp.gmail.com",
      port: 587,
      secure:false,
      auth: {
          user: CORREO_MSJ,
          pass: CLAVE_MSJ
      }
  });

  let htmlCorreo =  `<table width="100%" border="0" cellpadding="0" cellspacing="0" align="center" style="background-color:#f2f2f2;font-family:Helvetica,Arial,sans-serif;table-layout:fixed">
  <tbody>
      <tr>
          <td>
              <center>
                  <table width="600" border="0" cellpadding="0" cellspacing="0" style="width:600px">
                      <tbody>
                          <tr>
                              <td align="center" style="padding-top:20px;padding-left:70px;padding-right:70px;background-color:#fff">
                                  <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color:#fff;font-weight:200">
                                      <tbody>
                                          <tr>
                                              <td align="center"><img style="width:300px" src="https://previews.123rf.com/images/helloweenn/helloweenn1708/helloweenn170800005/83395299-watch-store-logo.jpg" alt="imagen del logo" class="CToWUd">
                                              </td>
                                          </tr>
                                          <tr>
                                              <td style="padding:10px 0">
                                                  <h1 style="font-size:30px;line-height:36px;color:#606060!important;margin:0;font-weight:bold;text-align:center;font-family:Helvetica,Arial,sans-serif">
                                                      Gracias por su compra </h1>
                                              </td>
                                          </tr>
                                          <tr>
                                              <td style="padding:10px 0">
                                                  <div style="text-align:center"><div  style="margin-bottom:50px;display:inline-block;color:#fff;background-color:#bd3535;border-top:20px solid #bd3535;border-bottom:20px solid #bd3535;border-right:55px solid #bd3535;border-left:55px solid #bd3535;font-size:20px;font-weight:500;line-height:18px;text-decoration:none;border-radius:3px;font-family:Helvetica,Arial,sans-serif"
                                                          > ${producto.nombre} cantdad:${producto.cantidad} precio:${producto.precio}</div> </div>
                                                      <img  src="${producto.img}" style="width:150px;"  alt="">
                                              </td>
                                          </tr>
                                          <tr>
                                              <td style="padding:20px 0 20px">
                                                  <p style="font-size:15px;line-height:22px;color:#606060!important;font-family:Helvetica,Arial,sans-serif;margin:0;padding:0">
                                                      Para cualquier problema, póngase en contacto con nuestro servicio al cliente 24/7:
                                                      <a style="color:#bd3535" href="mailto:watchstore@gmail.com" target="_blank">watchstore@gmail.com </a>
                                                  </p>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                          <tr>
                              <td align="justify" style="padding:20px 15px 5px">
                                  <table width="100%" style="text-align:center;font-size:11px;border-top:1px solid #bd3535;border-bottom:1px solid #bd3535">
                                      <tbody>
                                          <tr>
                                              <td style="padding:10px 0">
                                                  <a href="https://www.facebook.com/tienda.relojes.1" style="text-decoration:none;font-weight:bold;color:#262626;font-family:Helvetica,Arial,sans-serif" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.facebook.com/montao.net/?modal%3Dadmin_todo_tour&amp;source=gmail&amp;ust=1577464346759000&amp;usg=AFQjCNE8-cfnmN7AWWBRYfIGr4K2xz3GSw">FACEBOOK
                                                                       </a>
                                              </td>
                                              <td style="padding:10px 0">
                                                  <a href="https://www.instagram.com/paparelojes/" style="text-decoration:none;font-weight:bold;color:#262626;font-family:Helvetica,Arial,sans-serif" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://www.instagram.com/montao.net_/&amp;source=gmail&amp;ust=1577464346759000&amp;usg=AFQjCNE3z4UEX3I_u6-8WTzHch0qIFqGzA">INSTAGRAM
                                                                       </a>
                                              </td>
                                              <td style="padding:10px 0">
                                                  <a href="https://wa.me/8093624719" style="text-decoration:none;font-weight:bold;color:#262626;font-family:Helvetica,Arial,sans-serif" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://wa.me/8095759276&amp;source=gmail&amp;ust=1577464346759000&amp;usg=AFQjCNFSCVsWHwEQAh5xD8tdFFHiBoBn_Q">WHATSAPP
                                                                      </a>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                              </td>
                          </tr>
                         
                      </tbody>
                  </table>
              </center>
          </td>
      </tr>
 </tbody>
</table>`

  var mailOptions = {
      from: `watchstore <${CORREO_MSJ}>`,
      to: correo,
      subject: 'Factura',
      html: htmlCorreo
  };


  transporter.sendMail(mailOptions, async (error: any, info: any) => {
      if (error) {
          const Error_MSJ = {
              descripcion: 'Error al enviar el correo de activación a los usuarios.Endpoint (/activarCorreo). Funcion (enviarCorreo)',
              causa: error,
          }
         
          return false
      } else {
          return true
      }
  });
}
