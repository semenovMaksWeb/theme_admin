import React from "react";
import {useTypeSelector} from "../../../hook/use-typed-selector";
import "./paginator.css"
export interface PropsTypePaginator{
    id: number,
}

export function Paginator(props:PropsTypePaginator){
    const  components = useTypeSelector(state => state.components.components);
    const component:any = components[props.id];
    let  arrows_pagination: JSX.Element = <></>;
    if (component.paginator && component.paginator.arrows_pagination){
        arrows_pagination = <>
            <div className="paginator_back">Назад</div>
            <div className="paginator_next">Вперед</div>
        </>;
    }
    return(
        <div className="paginator">
            {arrows_pagination}
        </div>
    )
}