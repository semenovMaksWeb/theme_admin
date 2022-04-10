import {ConfigCallback} from "../../../interface/config/configCallback";
import {frontData} from "../../front_data";
import {store} from "../../../store"
import {ComponentsTypes} from "../../../store/type/components";

/**
 * @function add_table_row
 * калбек функция
 * добавляется в таблицу строку по кондишналам
 */
export function add_table_row(config:ConfigCallback, content:any){
    const table:any = store.getState().components.components[config.params.id];
    const {all} = frontData(config.params.config, content);
    if (all.data){
        const table_data = table.data;
        table_data.push(all.data);
        store.dispatch({type: ComponentsTypes.CREATE_DATA_COMPONENT, payload:{id:config.params.id, data:table_data }})
    }
}