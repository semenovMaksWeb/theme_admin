import {FrontData} from "../../interface/config/configFrontData";
import {store} from "../../store"
import {TypeComponents} from "../../interface/typeComponents";

export function fd_2(config:FrontData, context:any){
    const components:any = store.getState().components.components[config.id];
    if (components.type === TypeComponents.form){
        return  components.values[config.name];
    }
}