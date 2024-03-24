import express, {Application} from 'express'
import userRoutes from '../routes/users' //Default export does not need an alias
import  cors  from 'cors';
import db from '../../db/config';
class Server {
    
    private app: Application;
    private port: string;
    private apiPaths = {
        users:'/api/users'
    }

    constructor(){
        this.app = express()
        this.port = process.env.PORT || '8000';
        this.connectDB();
        this.middleware();
        this.routes();

    }

    async connectDB(){
        try {
            await db.authenticate();
            console.log('Database online')
        } catch (error:any) {
            throw new Error(error);
            
        }
    }
    middleware(){

        //CORS
        this.app.use(cors({}))
        //Parse Body
        this.app.use(express.json())

        //Public Folder which serve static content 
        this.app.use(express.static('src/public'))

    }
    routes(){
        this.app.use(this.apiPaths.users, userRoutes)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Server running on port ' + this.port)
        })
    }
    
}

export default Server;

