import {PaginatorConfig, PaginatorType} from "../../../../interface/table-data/PaginatorConfig";

export function paginatorDataTable(data:any, paginator:PaginatorConfig) {
    if (paginator && paginator.type === PaginatorType.page){
        return data.slice(
            (paginator.page - 1) * paginator.limit,
            paginator.page * paginator.limit
        );
    }
    return  data;
}