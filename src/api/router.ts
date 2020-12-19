import express from "express"
const Chalk = require('chalk');

interface routerInterface {
    endpoint: string;
    path: string
}
const Router = express.Router();

const RoutersConfig: routerInterface[] = [
   
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
]

export default class RouterConfig {
    
    constructor(){ }



    private async setRouters() {
        try {
            for (const route of RoutersConfig) {
                const file = require(route.path)
                Router.use(route.endpoint, file)
            }
            return true
        } catch (error) {
            throw {
                message: 'No se pudo configurar todos los routes',
                cause: error
            }
                        
        }
    }


    async startRouterConfig() {
        try {
            await this.setRouters()
            return Router
            
        } catch (error) {
            console.log( Chalk.red(` ======== [Fatal Error]: ${error.message} ========`) );
            console.log(error.cause);
            console.log('======== End error ========');
            
            
            throw error;
        }
    }
}
