"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLAVE_MSJ = exports.CORREO_MSJ = exports.HOSTS_ALLOWED = exports.ConfigDB = exports.ConfigAPP = void 0;
exports.ConfigAPP = {
    SERVER_PORT: Number(process.env.PORT) || 5660,
};
exports.ConfigDB = {
    MONGO_URI: process.env.URI_MONGO ||
        "mongodb+srv://reloj:reloj@cluster0-aobp0.mongodb.net/reloj",
};
exports.HOSTS_ALLOWED = process.env.HOST || "http://localhost:3000";
exports.CORREO_MSJ = "";
exports.CLAVE_MSJ = "";
