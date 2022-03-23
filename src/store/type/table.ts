import {ComponentsTypes} from "./components";

export interface DataSaveTable{
    type: ComponentsTypes.CREATE_DATA_COMPONENT,
    payload: {
        id:number,
        data:any,
    },
}
export type TableAction = DataSaveTable;