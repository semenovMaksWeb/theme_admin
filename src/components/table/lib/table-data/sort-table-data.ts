import {SortConfig} from "../../../../interface/table-data/SortConfig";

export const sortLib = (a:any, b:any, elem:SortConfig) => {
    if (a[elem.key] > b[elem.key]) {
        return 1;
    }
    if (a[elem.key] < b[elem.key]) {
        return -1;
    }
    return 0;
};

export function sortDataTable(data:any, sort?:SortConfig[]) {
    if (!sort){
        return;
    }
    for (const elem of sort) {
        data.sort((a:any, b:any) => {
            if (elem.type === "asc") {
                return sortLib(a, b, elem);
            }
            if (elem.type === "desc") {
                return sortLib(b, a, elem);
            }
            return 0;
        });
    }
}