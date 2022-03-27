import {store} from "../../../store";
import {ComponentsTypes} from "../../../store/type/components";

export function ConvertSchemaValue(id:number, data:any, schema:any){
    console.log(id, data, schema);
    const res:any = {};
    for (const elem of schema) {
        res[elem.key_values] = data[elem.key_api];
    }
    store.dispatch({
        type: ComponentsTypes.SAVE_VALUES_FORM,
        payload:{
            id: id,
            values: res
        }
    })
}