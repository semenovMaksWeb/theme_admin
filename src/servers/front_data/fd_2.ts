import {FrontData} from "../../interface/config/configFrontData";
import {store} from "../../store"
import {TypeComponents} from "../../interface/typeComponents";

export function fd_2(config:FrontData, context:any){
    const components:any = store.getState().components.components[config.id];
    console.log(config, components);
    if (components.type === TypeComponents.form){
        console.log(components.values[config.name])
        return  components.values[config.name];
    }
}