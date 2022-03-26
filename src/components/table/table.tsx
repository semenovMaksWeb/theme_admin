import React, {useEffect,  } from "react";
import "./styles/table.css"
import {useTypeSelector} from "../../hook/use-typed-selector";
import {CreateContent} from "./lib/create-dom/create-content";
import {useActions} from "../../hook/use-actions";
import {componentsStyle} from "../../servers/css/components_style";

export function Table(props:any){
    const  {CreateCheckboxData, DataSaveTable}= useActions();
    const  components = useTypeSelector(state => state.components.components);
    const table:any = components[props.id];
    useEffect(()=>{
        if (table){
            DataSaveTable(table.id);
        }
    }, [table.id])
    const  {body, header, checkbox} = CreateContent(table);
    useEffect(()=>{
        if (table && checkbox.length > 0){
            CreateCheckboxData(table.id, checkbox);
        }
    }, [table.data])

    if (!table){
        return  (<><div>Таблица не иницилизирована!</div> </>)
    }
    const {components_style} = componentsStyle(table);
    return(
        <>
            <div className="table components" data-id={table.id} style={components_style}>
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