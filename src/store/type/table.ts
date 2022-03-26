import {ComponentsTypes} from "./components";
import {TableCheckboxData} from "../../interface/tableCheckboxData";

export interface DataSaveTable{
    type: ComponentsTypes.CREATE_DATA_COMPONENT,
    payload: {
        id:number,
        data:any,
    },
}
export interface CreateCheckboxData{
    type: ComponentsTypes.CREATE_CHECKBOX_COMPONENT,
    payload: {
        id:number,
        data:TableCheckboxData[],
    },
}
export interface DeleteCheckboxTable{
    type: ComponentsTypes.DELETE_CHECKBOX_COMPONENT,
    payload: {
        id:number,
        index:number
    }
}
export type TableAction = DataSaveTable | CreateCheckboxData | DeleteCheckboxTable;