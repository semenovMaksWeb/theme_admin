import {Dispatch} from "redux";
import {ComponentsAction, ComponentsTypes} from "../type/components";

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