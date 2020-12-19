import { ConfigDB } from './enviroment'


const Chalk = require('chalk');
const Mongoose = require('mongoose');

Mongoose.set('useFindAndModify', false);
Mongoose.set('useUnifiedTopology', true);
Mongoose.set('useNewUrlParser', true);
Mongoose.set('useCreateIndex', true)



export default class ServerDataBase {
    private static conectionDB = null;

    async startConection() {
        try {

        

            ServerDataBase.conectionDB = await Mongoose.connection.openUri(`${ConfigDB.MONGO_URI}?retryWrites=true`)
            console.log(Chalk.green('======== Connected to MongoDB ========'))
            return ServerDataBase.conectionDB;
            
        } catch (error) {
                console.log('============= Error al intentar conextar a Mongodb  ================')
                console.log( Chalk.red('[Fatal Error MongoDB]'), error)
        }
    }

    async getConnectionDB() {
        if(!ServerDataBase.conectionDB) {
            throw "Por favor debe iniciar la conexion a la base de datos"
        } 
        return ServerDataBase.conectionDB;
    }
    
}