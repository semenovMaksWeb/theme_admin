import {FrontData} from "../../interface/config/configFrontData";

export function fd_1(config:FrontData, context:any){
    if (config.index !== undefined){
        return context[config.index][config.name];
    }
    return context[config.name];
}