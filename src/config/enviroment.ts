export const ConfigAPP = {
    SERVER_PORT: Number(process.env.PORT) || 5660,
  };
  
  export const ConfigDB = {
    MONGO_URI:
      process.env.URI_MONGO ||
      "mongodb+srv://reloj:reloj@cluster0-aobp0.mongodb.net/reloj",
  };
  
  export const HOSTS_ALLOWED = process.env.HOST || "http://localhost:3000"
  export const CORREO_MSJ = ""
  export const CLAVE_MSJ = ""
  

  
  