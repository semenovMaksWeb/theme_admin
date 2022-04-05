import React from "react";
import "./paginator.css"
import {PaginatorElement} from "./paginator_element/paginator_element"
export interface PropsTypePaginator{
    id: number,
}
export function Paginator(props:PropsTypePaginator){
    let {arrows_pagination} = PaginatorElement({id:props.id});
    return(
        <div className="paginator">
            {arrows_pagination}
        </div>
    )
}