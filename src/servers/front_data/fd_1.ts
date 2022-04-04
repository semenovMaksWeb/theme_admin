import {FrontData} from "../../interface/config/configFrontData";

/**
 * @function fd_1
 * функция получение контента по context компонента то что ему пришло props-ом
 */
export function fd_1(config:FrontData, context:any){
    if (config.index !== undefined){
        if (!config.name){
            return context[config.index];
        }
        return context[config.index][config.name];
    }
    return context[config.name];
}