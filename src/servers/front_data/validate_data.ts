import {FrontData} from "../../interface/config/configFrontData";
import {ValType} from "../../interface/type/valType";

/**
 * @function validateData
 * функция которая валидирует параметры по типам
 * вызывается в front_data
 */
export function validateData(config:FrontData,data:any){
    if (config.var_type === ValType.number){
        const res = +data;
        if (!isNaN(res)){
            return res
        }
        return null;
    }
}