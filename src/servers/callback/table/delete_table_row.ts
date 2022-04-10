import {ConfigCallback} from "../../../interface/config/configCallback";
import {frontData} from "../../front_data";
import {store} from "../../../store"
import {ComponentsTypes} from "../../../store/type/components";

/**
 * @function CallbackDeleteTableRow
 * калбек функция
 * удаляет записи в таблице по id или id[]
 */
export function CallbackDeleteTableRow(config:ConfigCallback, content:any){

    const {all} = frontData(config.params.config, content);
    // id удаляемой записи
    const id:any = Object.values(all)[0];
    // id таблицы
    const id_table = config.params.id;
    // store таблица
    const table:any = store.getState().components.components[id_table];


    if (!Array.isArray(id)){
        // новый массив даннных
        const data_new = table.data.filter((e:any)=> e[table.key_main] !== id);
        store.dispatch({type: ComponentsTypes.CREATE_DATA_COMPONENT, payload:{id:id_table, data:data_new }})
    }
    if (Array.isArray(id)){
        const data_new = table.data.filter((e:any)=> !id.includes(e[table.key_main]) );
        store.dispatch({type: ComponentsTypes.CREATE_DATA_COMPONENT, payload:{id:id_table, data:data_new }})
    }

}