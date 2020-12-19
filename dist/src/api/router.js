"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Chalk = require('chalk');
const Router = express_1.default.Router();
const RoutersConfig = [
    {
        endpoint: '/producto',
        path: './components/producto/router'
    },
    {
        endpoint: '/marca',
        path: './components/marca/router'
    },
    {
        endpoint: '/compra',
        path: './components/compra/router'
    },
    {
        endpoint: '/reserva',
        path: './components/reserva/router'
    }
];
class RouterConfig {
    constructor() { }
    async setRouters() {
        try {
            for (const route of RoutersConfig) {
                const file = require(route.path);
                Router.use(route.endpoint, file);
            }
            return true;
        }
        catch (error) {
            throw {
                message: 'No se pudo configurar todos los routes',
                cause: error
            };
        }
    }
    async startRouterConfig() {
        try {
            await this.setRouters();
            return Router;
        }
        catch (error) {
            console.log(Chalk.red(` ======== [Fatal Error]: ${error.message} ========`));
            console.log(error.cause);
            console.log('======== End error ========');
            throw error;
        }
    }
}
exports.default = RouterConfig;
