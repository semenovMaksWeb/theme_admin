import {ResetValuesForm, UpdateValuesForm} from "./form";
import {CreateCheckboxData} from "./table";

export enum ComponentsTypes {
    CREATE_COMPONENT="CREATE_COMPONENT",
    CREATE_COMPONENTS="CREATE_COMPONENTS",
    RESET_COMPONENT="RESET_COMPONENT",
    CREATE_DATA_COMPONENT="CREATE_DATA",
    UPDATE_VALUES_FORM="UPDATE_VALUES_FORM",
    RESET_VALUES_FORM="RESET_VALUES_FORM",
    CREATE_CHECKBOX_COMPONENT="CREATE_CHECKBOX_COMPONENT",
}

export interface CreateDataComponents{
    type: ComponentsTypes.CREATE_DATA_COMPONENT,
    payload: {
        data: any,
        id: number,
    },
}

export interface CreateComponent{
    type: ComponentsTypes.CREATE_COMPONENT,
    payload: {
        components: any,
        id: number,
    },
}
export interface ResetComponents{
    type: ComponentsTypes.RESET_COMPONENT,
}
export interface CreateComponents{
    type: ComponentsTypes.CREATE_COMPONENTS,
    payload: {
        components: any,
    },
}


export type ComponentsAction = CreateComponent | CreateCheckboxData | ResetComponents | CreateDataComponents | CreateComponents | UpdateValuesForm | ResetValuesForm;

export interface ComponentsReducers {
    components: any
}
export const ComponentsState: ComponentsReducers = {
    components: {}
}