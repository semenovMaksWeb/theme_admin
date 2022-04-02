import {FrontData} from "../../interface/config/configFrontData";
import {store} from "../../store"

export function fd_3(config:FrontData){
    if (config.id){
        const components:any = store.getState().components.components[config.id];
        // обработка checkbox_data у таблицы
        if (config.name === "checkbox_data"){
            const  res = [];
            for (const key in components.checkbox_data) {
                if (components.checkbox_data[key]){
                    res.push(+key)
                }
            }
            return  res;
        }
    }

}