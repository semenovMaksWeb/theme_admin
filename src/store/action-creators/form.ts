import {Dispatch} from "redux";
import {ComponentsAction, ComponentsTypes} from "../type/components";

export function UpdateValuesForm(id:number, key:string, value:any){
    return (dispatch: Dispatch<ComponentsAction>) => {
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