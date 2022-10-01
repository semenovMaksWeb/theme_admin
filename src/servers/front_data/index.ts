import {ConfigFrontData, FrontData} from "../../interface/config/configFrontData";
import {fd_1} from "./fd_1";
import {fd_2} from "./fd_2";
import {fd_3} from "./fd_3";
import {fd_4} from "./fd_4";
import {validateData} from "./validate_data";
import {ContextType} from "../../interface/type/ContextType";

/**
 *@function frontData
 * функция универсальная точка входа получение данных на фронте для дальшейней её обработки
 */
export function frontData(configFrontData:ConfigFrontData, content:ContextType){
    const params:any = {};
    const body:any = {};
    const all:any = {};
    for (const key in configFrontData) {
        const config:FrontData = configFrontData[key];
        if (config.type === 1){
            checkSave(config, key, fd_1(config, content));
        }
        if (config.type === 2){
            checkSave(config, key, fd_2(config));
        }
        if (config.type === 3){
            checkSave(config, key, fd_3(config));
        }
        if (config.type === 4){
            checkSave(config, key, fd_4(config));
        }
    }

    function checkSave(config:FrontData, key:string, data:any){
        if (config.var_type){
            data = validateData(config, data);
        }
        if (config.result === 'params'){
            params[key] = data;
        }
        if (config.result === 'body'){
            body[key]= data;
        }
        if (config.result === "all"){
            all[key]= data;
        }
    }
    return {params, body, all};
}

