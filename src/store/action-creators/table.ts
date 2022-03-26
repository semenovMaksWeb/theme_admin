import {Dispatch} from "redux";
import {TableAction} from "../type/table";


import {indexApi} from "../../api/index-api";
import {ComponentsTypes} from "../type/components";
import {TableCheckboxData} from "../../interface/tableCheckboxData";


export function DataSaveTable(id:number){
    return async (dispatch: Dispatch<TableAction>, getStore:any) => {
        const api_url = getStore().components.components[id].api_url;
        const response = await indexApi[api_url]();
        dispatch({
            type: ComponentsTypes.CREATE_DATA_COMPONENT,
            payload:  {id: id, data:  response.data}
        })
    }
}
export function CreateCheckboxData(id:number, data:TableCheckboxData[]){
    return async (dispatch: Dispatch<TableAction>) => {
        dispatch({
            type: ComponentsTypes.CREATE_CHECKBOX_COMPONENT,
            payload:  {id: id, data:  data}
        })

    }
}