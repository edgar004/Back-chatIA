"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const enviroment_1 = require("../config/enviroment");
const express_1 = __importDefault(require("express"));
const router_1 = __importDefault(require("./router"));
// Constantes
const Cors = require("cors");
const BodyParser = require("body-parser");
const chakl = require("chalk");
class AppConfig {
    constructor() {
        this.App = express_1.default();
    }
    setCorsConfig() {
        this.App.use(Cors({
            origin: function (origin, callback) {
                if (!origin)
                    return callback(null, true);
                if (enviroment_1.HOSTS_ALLOWED.indexOf(origin) === -1) {
                    var msg = 'Acceso no permitido.';
                    return callback(msg, false);
                }
                return callback(null, true);
            },
            credentials: true,
            optionsSuccessStatus: 200,
        }));
    }
    setBodyParseConfig() {
        this.App.use(BodyParser.urlencoded({ limit: "17mb", extended: true }));
        this.App.use(BodyParser.json({ limit: "17mb", extended: true }));
    }
    async setRouters() {
        try {
            const routerConfig = new router_1.default();
            const routers = await routerConfig.startRouterConfig();
            this.App.use("/api", routers);
            return true;
        }
        catch (error) {
            throw error;
        }
    }
    async initializeExpressApp() {
        try {
            this.setBodyParseConfig();
            this.setCorsConfig();
            await this.setRouters();
            console.log(chakl.blue("======== Configuracion de express ========"));
            return this.App;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.default = AppConfig;
