import {filterDataTable} from "./filter-table-data";
import {groupDataTable} from "./group-table-data";
import {sortDataTable} from "./sort-table-data";
import {paginatorDataTable} from "./paginator-data-table";

export function table_data(data:any){
    let dataset = JSON.parse(JSON.stringify(data));
    filterDataTable(dataset, []);
    groupDataTable(dataset, []);
    sortDataTable(dataset, []);
    dataset = paginatorDataTable(dataset, {limit: 1, page:1});
    return dataset;
}