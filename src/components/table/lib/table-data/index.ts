import {filterDataTable} from "./filter-table-data";
import {groupDataTable} from "./group-table-data";
import {sortDataTable} from "./sort-table-data";
import {paginatorDataTable} from "./paginator-data-table";

export function table_data(data:any, table:any){
    if (table.type_table === "client"){
        let dataset = JSON.parse(JSON.stringify(data));
        filterDataTable(dataset, []);
        groupDataTable(dataset, []);
        sortDataTable(dataset, table.sort_rule);
        dataset = paginatorDataTable(dataset, table.paginator);
        return dataset;
    }
    return data;
}