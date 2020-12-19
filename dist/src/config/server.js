"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const enviroment_1 = require("./enviroment");
const Chalk = require('chalk');
class Server {
    constructor() {
        this.App = express_1.default();
        this.Port = enviroment_1.ConfigAPP.SERVER_PORT;
    }
    static get instance() {
        return this._intance || (this._intance = new this());
    }
    constantes() {
        return {
            App: this.App,
            Port: this.Port,
        };
    }
    start() {
        this.App.listen(this.Port, () => {
            console.log(Chalk.green('Server running on port: '), this.Port);
        });
    }
}
exports.default = Server;
