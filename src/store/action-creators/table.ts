import {Dispatch} from "redux";
import {TableAction} from "../type/table";


import {indexApi} from "../../api/index-api";
import {ComponentsTypes} from "../type/components";


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