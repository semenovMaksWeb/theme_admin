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
export interface SaveErrorForm{
    type: ComponentsTypes.SAVE_ERRORS_FORM,
    payload:{
        id: number,
        errors:any,
    }
}
export interface ResetKeyErrorsForm{
    type: ComponentsTypes.RESET_KEY_ERRORS_FORM,
    payload:{
        id: number,
        key:string,
    }
}