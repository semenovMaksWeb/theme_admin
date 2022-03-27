import {FrontData} from "../../interface/config/configFrontData";
import {ValType} from "../../interface/type/valType";

export function validateData(config:FrontData,data:any){
    if (config.var_type === ValType.number){
        const res = +data;
        if (!isNaN(res)){
            return res
        }
        return null;
    }
}