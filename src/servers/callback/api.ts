import {indexApi} from "../../api/index-api";
import {ConfigCallback} from "../../interface/config/configCallback";
import {frontData} from "../front_data";

export async function callbackApi(config:ConfigCallback, content:any){
    // url - путь url api
    // config получить данные для url
    //result - это body или params
    const {params, body} = frontData(config.params.config, content);
    return await indexApi[config.params.url](params, body);
}