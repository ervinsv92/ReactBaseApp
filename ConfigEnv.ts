class ConfigEnv {
    urlAPI:string;
    idModule:string;

    constructor(){
        this.urlAPI = String(import.meta.env.VITE_URL_API);
        this.idModule = String(import.meta.env.VITE_ID_MODULO);
    }    
}

export default new ConfigEnv();