import {
    HOSTS_ALLOWED,
  } from "../config/enviroment";
  import express from "express";
  import RouterConfig from "./router";
  
  // Constantes
  
  const Cors = require("cors");
  const BodyParser = require("body-parser");
  const chakl = require("chalk");
  
  export default class AppConfig {
    private App: express.Application;
  
    constructor() {
      this.App = express();
    }
  
    private setCorsConfig() {
     
      
  
      this.App.use(
        Cors({
          origin: function (origin: any, callback: any) {
             if(!origin) return callback(null, true);
            if(HOSTS_ALLOWED.indexOf(origin) === -1){
              var msg = 'Acceso no permitido.';
              return callback(msg, false);
            }
            return callback(null, true);
          },
          credentials: true,
          optionsSuccessStatus: 200,
        })
      );
    }
  
  
  
    private setBodyParseConfig() {
      this.App.use(BodyParser.urlencoded({ limit: "17mb", extended: true }));
      this.App.use(BodyParser.json({ limit: "17mb", extended: true }));
    }
  
   
    private async setRouters() {
      try {
        const routerConfig = new RouterConfig();
        const routers = await routerConfig.startRouterConfig();
  
        this.App.use("/api", routers);
  
        return true;
      } catch (error) {
        throw error;
      }
    }
  
  
    public async initializeExpressApp() {
      try {
        this.setBodyParseConfig();
        this.setCorsConfig();
  
        await this.setRouters();
  
        console.log(
          chakl.blue(
            "======== Configuracion de express ========"
          )
        );
  
        return this.App;
      } catch (error) {
        throw error;
      }
    }
  }
  