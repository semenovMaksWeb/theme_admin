import {ConfigFrontData, FrontData} from "../../interface/config/configFrontData";
import {fd_1} from "./fd_1";

export function frontData(configFrontData:ConfigFrontData, content:any){
    const params:any = {};
    const body:any = {};
    const all:any = {};
    for (const key in configFrontData) {
        const config:FrontData = configFrontData[key];
        if (config.type === 1){
            checkSave(config, key, fd_1(config, content));
        }
    }

    function checkSave(config:FrontData, key:string, data:any){
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

