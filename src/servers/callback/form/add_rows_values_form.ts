import {frontData} from "../../front_data";
import {store} from "../../../store";
import {ComponentsTypes} from "../../../store/type/components";

export function add_rows_values_form(config:any, content?:any) {
    const data = store.getState().components.components[config.params.id_form].values[config.params.values_key];
    if (config.params.front_data){
        const  { all } = frontData(config.params.front_data, content);
        data.push( all[Object.keys(all)[0]] );
        store.dispatch({
            type: ComponentsTypes.UPDATE_VALUES_FORM,
            payload:{
                key:config.params.values_key,
                id: config.params.id_form,
                value: data,
            }
        })
    }
}