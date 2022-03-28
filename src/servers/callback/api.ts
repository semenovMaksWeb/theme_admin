import {ConfigCallback} from "../../interface/config/configCallback";
import {frontData} from "../front_data";
import {generatorUrlApi} from "../../api/generatorUrlApi";

export async function callbackApi(config:ConfigCallback, content:any){
    // url - путь url api
    // config получить данные для url
    const {params, body} = frontData(config.params.config, content);
    return await generatorUrlApi(config.params.url, params, body);
}