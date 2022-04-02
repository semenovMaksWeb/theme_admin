import {Dispatch} from "redux";
import {TableAction} from "../type/table";
import {ComponentsTypes} from "../type/components";
import {TableCheckboxData} from "../../interface/tableCheckboxData";
import {generatorUrlApi} from "../../api/generatorUrlApi";
import {frontData} from "../../servers/front_data";


export function DataSaveTable(id:number){
    return async (dispatch: Dispatch<TableAction>, getStore:any) => {
        const api_url = getStore().components.components[id].api_url;
        const {body, params } = frontData(api_url.config, {});
        const response = await generatorUrlApi(api_url, params, body);
        if (response?.data){
            const  data = response?.data.map((e:any, index:number)=>
                {
                    return {
                        ...e,
                        index: index
                    }
                }
             )
            dispatch({
                type: ComponentsTypes.CREATE_DATA_COMPONENT,
                payload:  {id: id, data:data}
            })
        }
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