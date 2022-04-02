import {sortLib} from "./sort-table-data";
import {GroupConfig} from "../../../../interface/table-data/GroupConfig";
import {SortConfig} from "../../../../interface/table-data/SortConfig";

export function groupDataTable(data:any, group?:GroupConfig[]) {
    if (!group){
        return;
    }
    for (const elem of group) {
        for (const e of data) {
            if (!e._group) {
                e._group = [];
            }
            e._group.push({ [elem.key]: e[elem.key], order: elem.order });
        }
        data.sort((a:any, b:any) => sortLib(a, b, elem as SortConfig));
    }
}