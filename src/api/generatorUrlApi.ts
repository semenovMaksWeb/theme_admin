import axios from "axios";
import {apiUrl} from "./index-api";
import {baseApi} from "./baseApi";
import {TypeApi, TypeApiMethods} from "../interface/type/typeApi";

export  async function generatorUrlApi(config: TypeApi, params: any, body: any){
    let url:string = config.url;
    if (!config.domain){
        url = `${apiUrl}/${config.url}`;
    }
    if (config.type === TypeApiMethods.get){
        return baseApi(await axios.get(url, {params:{...params}} ) );
    }
    if (config.type === TypeApiMethods.post){
        return baseApi(await axios.post(url, {...body}, {params:{...params}} ) );
    }
    if (config.type === TypeApiMethods.delete){
        return baseApi(await axios.delete(url, {params:{...params}, data:{...body}} ) );
    }
    if (config.type === TypeApiMethods.put){
        return baseApi(await axios.put(url, {...body}, {params: {...params}} ) );
    }
    return  null;
}