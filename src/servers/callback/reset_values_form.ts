import {store} from "../../store"
import {ComponentsTypes} from "../../store/type/components";

/**
 * @function reset_values_form
 * функция калбек
 * очищает форму от данных + удаляет все ошибки
 */
export function reset_values_form(id:number){
    const res:any = {};
    const form:any = store.getState().components.components[id].values;
    for (const key in form) {
        res[key] = "";
    }
    store.dispatch({type: ComponentsTypes.SAVE_VALUES_FORM, payload:{ id: id, values: res }});
    store.dispatch({type: ComponentsTypes.SAVE_ERRORS_FORM, payload:{ id: id, errors: {} }});
}