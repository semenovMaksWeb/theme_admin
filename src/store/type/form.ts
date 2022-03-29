import {ComponentsTypes} from "./components";

export interface UpdateValuesForm{
    type: ComponentsTypes.UPDATE_VALUES_FORM,
    payload:{
        id: number,
        key:string,
        value:any,
    }
}
export interface SaveValuesForm{
    type: ComponentsTypes.SAVE_VALUES_FORM,
    payload:{
        id: number,
        values:any,
    }
}