import React from "react";
import "./styles/table.css"
import {useTypeSelector} from "../../hook/use-typed-selector";
import {CreateContent} from "./lib/create-dom/create-content";

export function Table(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const table:any = components[props.id];
    if (!table){
        return  (<><div>Таблица не иницилизирована!</div> </>)
    }
    const  {body, header} = CreateContent(table);
    return(
        <>
            <div className="table" data-id={table.id}>
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