import {FilterConfig} from "../../../../interface/table-data/FilterConfig";

export function filterDataTable(data:any, filter: FilterConfig[]) {
    let res:any = []
        for (const elem of filter) {
            if (elem.string_search !== undefined) {
                res = data.filter((e:any) => e[elem.key] === elem.string_search);
            }
    }
    return res;
}