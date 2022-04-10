import {Dispatch} from "redux";
import {ComponentsAction, ComponentsTypes} from "../type/components";

/**
 * @function UpdateValuesForm
 * функция store
 * изменяет данные в форме + очищает ошибки при изменения ввода
 */
export function UpdateValuesForm(id:number, key:string, value:any){
    return (dispatch: Dispatch<ComponentsAction>, getStore:any) => {
        const errors = getStore().components.components[id].errors;
        if (errors && errors[key]){
            dispatch({
                type: ComponentsTypes.RESET_KEY_ERRORS_FORM,
                payload:{
                    key: key,
                    id: id,
                }
            })
        }
        dispatch({
            type: ComponentsTypes.UPDATE_VALUES_FORM,
            payload:{
                key:key,
                id: id,
                value: value,
            }
        })
    }
}


/**
 * @function UpdateValuesForm
 * функция store
 * изменяет данные в форме + очищает ошибки при изменения ввода в компоненте rows
 */
export function UpdateValuesRowsForm(id:number, key_parent:string, index:number, key:string, value:any){
    return (dispatch: Dispatch<ComponentsAction>, getStore:any) => {
        const values =  getStore().components.components[id].values[key_parent];
        values[index][key] = value;
        dispatch({
            type: ComponentsTypes.UPDATE_VALUES_FORM,
            payload:{
                key:key_parent,
                id: id,
                value: values,
            }
        })
    }
}