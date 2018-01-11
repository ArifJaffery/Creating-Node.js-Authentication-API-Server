import {Application} from "express";
import {LoginController}  from './controller/login-controller';

export class main{
    app:Application;

    constructor(){
        console.log('API Server starting ......');
        new LoginController(this.app);
    }

}

export default new main();