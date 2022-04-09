import  {store} from "store"
import {frontData} from "../../../../../servers/front_data";
import {generatorUrlApi} from "../../../../../api/generatorUrlApi";
import {ComponentsTypes} from "../../../../../store/type/components";
export async function dataLoader(elem:any, id_form:number) {
    const api_url = elem.api_data;
    const {body, params } = frontData(api_url.config, {});
    const response = await generatorUrlApi(api_url.url, params, body);
    dataSaveSelect(elem.schema, response, id_form, elem.id);
}
export function dataSaveSelect(schema:any, response:any, id_form:number, id_select:number) {
    const data = [];
    if (response?.status === 200 && response.data.length > 0){
        for (const data_api of response.data) {
            data.push({id: data_api[schema['id']], name: data_api[schema['name']] });
        }
    }
    store.dispatch({type: ComponentsTypes.SAVE_MANUAL_FORM,
        payload:{
            data: data,
            id: id_form,
            id_manual:id_select,
        }
    })
}