import {FrontData} from "../../interface/config/configFrontData";
import {store} from "../../store"
import {TypeComponents} from "../../interface/type/typeComponents";

/**
 * @function fd_2
 * функция получение контента данных компонента
 */
export function fd_2(config:FrontData ){
    if (config.id){
        const components:any = store.getState().components.components[config.id];
        if (components.type === TypeComponents.form){
            return  components.values[config.name];
        }
    }
}