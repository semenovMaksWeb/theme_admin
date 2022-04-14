import {frontData} from "../../front_data";
import {store} from "../../../store";
import {ComponentsTypes} from "../../../store/type/components";
import {generatorUrlApi} from "../../../api/generatorUrlApi";

export async function add_rows_values_form(config:any, content?:any) {
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
    }else if (config.params.url){
        const  { params, body } = frontData(config.params.config, content);
        const res = await generatorUrlApi(config.params.url, params, body);
        data.push(res?.data);
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