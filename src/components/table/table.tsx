import React from "react";
import {useActions} from "../../hook/use-actions";
import {useTypeSelector} from "../../hook/use-typed-selector";
import {createContent} from "./lib/create-dom/create-content";

export function Table(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const table:any = components[props.id];
    if (!table){
        return  (<><div>Таблица не иницилизирована!</div> </>)
    }
    const  {body, header} = createContent(table);
    return(
        <>
            <div className="table">
                <div className="table__header">
                    {header}
                </div>
                <div className="table__body">
                    {body}
                </div>
            </div>
        </>
    )
}