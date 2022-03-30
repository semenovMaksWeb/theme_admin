import React, {useEffect, useState,} from "react";
import "./styles/table.css"
import {useTypeSelector} from "../../hook/use-typed-selector";
import {CreateContent} from "./lib/create-dom/create-content";
import {useActions} from "../../hook/use-actions";
import {componentsStyle} from "../../servers/css/components_style";

export function Table(props:any){
    const [styleTop, saveStyleTop] = useState({top: "0px"});


    const  {CreateCheckboxData, DataSaveTable}= useActions();
    const  components = useTypeSelector(state => state.components.components);
    const table:any = components[props.id];
    useEffect(()=>{
        if (table){
            DataSaveTable(table.id);
        }
    }, [table.id])
    /**
     * #TODO CreateContent отрабатывает при каждом скролле критично!
     */
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
    const scrollTableEvent =(e:any)=>{
        saveStyleTop({top: `${e.target.scrollTop}px`});
    }
    return(
        <>
            <div className="table components" data-id={table.id} style={components_style} onScroll={scrollTableEvent}>
                <div className="fixed__container">
                    <div className="table__header" style={styleTop}>
                        {header}
                    </div>

                </div>
                <div className="table__body">
                    {body}
                </div>
            </div>
        </>
    )
}