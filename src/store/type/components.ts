import {ResetKeyErrorsForm, SaveErrorForm, SaveValuesForm, UpdateValuesForm} from "./form";
import {CreateCheckboxData, DeleteCheckboxTable} from "./table";
import {SortConfig} from "../../interface/table-data/SortConfig";
import {PaginatorConfig} from "../../interface/table-data/PaginatorConfig";

export enum ComponentsTypes {
    CREATE_COMPONENT="CREATE_COMPONENT",
    CREATE_COMPONENTS="CREATE_COMPONENTS",
    RESET_COMPONENT="RESET_COMPONENT",
    CREATE_DATA_COMPONENT="CREATE_DATA",
    UPDATE_VALUES_FORM="UPDATE_VALUES_FORM",
    SAVE_VALUES_FORM="SAVE_VALUES_FORM",
    SAVE_ERRORS_FORM="SAVE_ERRORS_FORM",
    RESET_KEY_ERRORS_FORM="RESET_KEY_ERRORS_FORM",
    CREATE_CHECKBOX_COMPONENT="CREATE_CHECKBOX_COMPONENT",
    DELETE_CHECKBOX_COMPONENT="DELETE_CHECKBOX_COMPONENT",
    UPDATE_SORT_RULE = "UPDATE_SORT_RULE",
    PAGINATOR_SAVE = "PAGINATOR_SAVE",
}

export interface PaginatorSave{
    type: ComponentsTypes.PAGINATOR_SAVE,
    payload: {
        data: PaginatorConfig,
        id: number,
    },
}


export interface UpdateSortRule{
    type: ComponentsTypes.UPDATE_SORT_RULE,
    payload: {
        data: SortConfig[],
        id: number,
    },
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


export type ComponentsAction =
    DeleteCheckboxTable | PaginatorSave| UpdateSortRule | CreateComponent | CreateCheckboxData | ResetComponents
    | CreateDataComponents | CreateComponents | UpdateValuesForm | SaveValuesForm | SaveErrorForm | ResetKeyErrorsForm;

export interface ComponentsReducers {
    components: any
}
export const ComponentsState: ComponentsReducers = {
    components: {}
}