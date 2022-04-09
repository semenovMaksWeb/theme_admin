import {Dispatch} from "redux";
import {TableAction} from "../type/table";
import {ComponentsTypes} from "../type/components";
import {TableCheckboxData} from "../../interface/tableCheckboxData";
import {generatorUrlApi} from "../../api/generatorUrlApi";
import {frontData} from "../../servers/front_data";
import {errorsBack} from "../../servers/callback/errors-back";
import {useHistory} from "react-router";

/**
 * @function DataSaveTable
 * функция store
 * получается данные по api + парсит их + сохраняет в store для отображения
 */
export function DataSaveTable(id:number, history:any){
    return async (dispatch: Dispatch<TableAction>, getStore:any) => {
        const api_url = getStore().components.components[id].api_url;
        const {body, params } = frontData(api_url.config, {});
        const response = await generatorUrlApi(api_url, params, body);
        if (response?.status !== 200){
            await errorsBack(api_url.errors, response?.data?.errors, history);
            return;
        }
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

/**
 * @function CreateCheckboxData
 * функция store
 * сохраняет список checkbox для отображения
 */
export function CreateCheckboxData(id:number){
    return async (dispatch: Dispatch<TableAction>, getStore:any) => {
        const table = getStore().components.components[id];
        const checkbox:TableCheckboxData = {};
        for (const dataset of table.data){
            checkbox[dataset[table.key_main]] = false;
        }
        dispatch({
            type: ComponentsTypes.CREATE_CHECKBOX_COMPONENT,
            payload:  {id: id, data:  checkbox}
        })

    }
}