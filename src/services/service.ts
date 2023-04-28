import axios from 'axios';
import Config from '../../ConfigEnv';

class Service{

    urlAPI:string;

    constructor(){
        this.urlAPI = Config.urlAPI;
    }

    metodoString(texto:string):string{
        return "";
    }

    metodoNumero(texto:string):number{
        return 4;
    }

    async consultaGet(){
        return (await axios.get(`${this.urlAPI}/users`)).data;
    }
}

export default new Service();