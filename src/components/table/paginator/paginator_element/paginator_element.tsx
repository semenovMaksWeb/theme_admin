import React from "react";
import {useTypeSelector} from "../../../../hook/use-typed-selector";
import {store} from "../../../../store";
import {ComponentsTypes} from "../../../../store/type/components";
import {PaginatorConfig} from "../../../../interface/table-data/PaginatorConfig";
export interface PropsTypePaginator{
    id: number,
}
export function PaginatorElement(props:PropsTypePaginator){
    const  components = useTypeSelector(state => state.components.components);
    const component:any = components[props.id];
    let  arrows_pagination: JSX.Element = <></>;
    const savePage = (page:number)=>{
        const data:PaginatorConfig = {
            ...component.paginator,
            page: page
        }
        store.dispatch({type: ComponentsTypes.PAGINATOR_SAVE, payload: {
                id: props.id,
                data:data,
            }})
    }
    const backClick = ()=>{
        if (component.paginator.page !== 1){
            savePage(component.paginator.page-1)
        }
    }
    const nextClick = ()=>{
        if (component.data.length > component.paginator.page * component.paginator.limit){
            savePage(component.paginator.page+1)
        }
    }


    if (component.paginator && component.paginator.arrows_pagination){
        arrows_pagination = <>
            <div className="paginator_elem paginator_back" onClick={backClick}>Назад</div>
            <div className="paginator_elem paginator_active">{component.paginator.page}</div>
            <div className="paginator_elem paginator_next" onClick={nextClick}>Вперед</div>
        </>;
    }
    return {arrows_pagination}
}