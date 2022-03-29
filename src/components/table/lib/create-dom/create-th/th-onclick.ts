import {store} from "../../../../../store";
import {ComponentsTypes} from "../../../../../store/type/components";
import {SortConfig, SortTypeConfig} from "../../../../../interface/table-data/SortConfig";

export function thOnclick(elem:any, table:any, sort_rule?:SortConfig){
    let type_value:SortTypeConfig = SortTypeConfig.asc;
    if (elem.sort){
        if (sort_rule?.type === "desc"){
            store.dispatch({
                type: ComponentsTypes.UPDATE_SORT_RULE,
                payload:{
                    id: table.id,
                    data: []
                }
            })
            return;
        }
        else if (!sort_rule){
            type_value = SortTypeConfig.asc;
        }
        else if (sort_rule?.type === "asc"){
            type_value = SortTypeConfig.desc
        }
        store.dispatch({
            type: ComponentsTypes.UPDATE_SORT_RULE,
            payload:{
                id: table.id,
                data: [{type: type_value, key: elem.key, order: 1}]
            }
        })
    }
}