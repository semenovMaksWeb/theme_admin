import {store} from "../../../store";
import {ComponentsTypes} from "../../../store/type/components";

export function ConvertSchemaValue(id:number, data:any, schema:any){
    let res:any = {};
    if (schema){
        for (const elem of schema) {
            res[elem.key_values] = data[elem.key_api];
        }
    }else {
        res = data;
    }
    store.dispatch({
        type: ComponentsTypes.SAVE_VALUES_FORM,
        payload:{
            id: id,
            values: res
        }
    })
}