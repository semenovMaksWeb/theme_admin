import {PaginatorConfig} from "../../../../interface/table-data/PaginatorConfig";

export function paginatorDataTable(data:any, paginator:PaginatorConfig) {
    if (paginator){
        return data.slice(
            (paginator.page - 1) * paginator.limit,
            paginator.page * paginator.limit
        );
    }
    return  data;
}