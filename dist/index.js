"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/config/server"));
const database_1 = __importDefault(require("./src/config/database"));
const api_1 = __importDefault(require("./src/api"));
const Chalk = require('chalk');
// Instancia de la clase Server y base de datos
const ServerInstance = server_1.default.instance;
const DataBaseConection = new database_1.default();
const ServerApp = ServerInstance.constantes().App;
const appConfig = new api_1.default();
initialiceServer();
async function initialiceServer() {
    try {
        const app = await appConfig.initializeExpressApp();
        ServerApp.use(app);
        await DataBaseConection.startConection();
        ServerInstance.start();
    }
    catch (error) {
        console.log(Chalk.red(` ======== [Fatal Error] The server couldn't start ========`));
    }
}
