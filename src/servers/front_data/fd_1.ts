import {FrontData} from "../../interface/config/configFrontData";

export function fd_1(config:FrontData, context:any){
    return context[config.name];
}