import {FrontData} from "../../interface/config/configFrontData";
import {store} from "../../store"
import {TypeComponents} from "../../interface/type/typeComponents";

export function fd_3(config:FrontData){
    const components:any = store.getState().components.components[config.id];
    if (config.name === "checkbox_data"){
        const  res = [];
        for (const e of components.checkbox_data) {
            if (e.value){
                res.push(e.key)
            }
        }
        return  res;
    }
}