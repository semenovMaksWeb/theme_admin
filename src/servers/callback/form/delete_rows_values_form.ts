import {frontData} from "../../front_data";
import  {store} from "../../../store";
import {ComponentsTypes} from "../../../store/type/components";

export function delete_rows_values_form(params:any, content:any ={}) {
    const {all} = frontData(params.config, content);
    const form =  store.getState().components.components[params.id_form];
    const value = form.values[params.values_key];
    const key_filter= Object.keys(all)[0];
    const res = value.filter((val:any)=>{
        return val[key_filter] !== all[key_filter]
    });
    store.dispatch({
        type: ComponentsTypes.UPDATE_VALUES_FORM,
        payload:{
            key:params.values_key,
            id: params.id_form,
            value: res,
        }
    })
}