import {store} from "../../store"
import {ComponentsTypes} from "../../store/type/components";

export function reset_values_form(id:number){
    const res:any = {};
    const form:any = store.getState().components.components[id].values;
    for (const key in form) {
        res[key] = "";
    }
    store.dispatch({type: ComponentsTypes.SAVE_VALUES_FORM, payload:{ id: id, values: res }});
    store.dispatch({type: ComponentsTypes.SAVE_ERRORS_FORM, payload:{ id: id, errors: {} }});
}