import {store} from "../../../../../store";
import {ComponentsTypes} from "../../../../../store/type/components";
import {SortConfig, SortTypeConfig} from "../../../../../interface/table-data/SortConfig";


function pushSortRule(elem:any, sort_rule?:SortConfig, order: number= 1){
    if (!sort_rule){
        return  {type:  SortTypeConfig.asc, key: elem.key, order: order};
    }
    else if (sort_rule?.type === "asc"){
         return {type:  SortTypeConfig.desc, key: elem.key, order: order}
    }
    return  null;
}

function checkAndPushSortRule(elem:any, sort_rule_new:SortConfig[], sort_rule?:SortConfig, order:number=1){
    const sort_check = pushSortRule(elem, sort_rule, order);
    if (sort_check !== null){
        sort_rule_new.push(sort_check);
    }
}

export function thOnclick(elem:any, table:any,  event:any, sort_rule?:SortConfig){
    let sort_rule_new: SortConfig[] = [];
    if (elem.sort){
        // без зажатого шифта
        if (!event?.shiftKey){
            checkAndPushSortRule(elem, sort_rule_new, sort_rule);
        }
        if (event?.shiftKey){
            sort_rule_new = table.sort_rule ? table.sort_rule : [];
            if (sort_rule){
                sort_rule_new.splice(sort_rule.order, 1);
            }
            checkAndPushSortRule(elem, sort_rule_new, sort_rule, sort_rule_new?.length);
        }
        sort_rule_new = sort_rule_new.map((e:SortConfig, index:number) => {
            return {...e,  order:index}
        })
        // сохранить новые правила сортировки в redux
        store.dispatch({
            type: ComponentsTypes.UPDATE_SORT_RULE,
            payload:{
                id: table.id,
                data: sort_rule_new
            }
        })
    }
}