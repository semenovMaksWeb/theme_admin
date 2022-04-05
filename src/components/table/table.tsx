import React, {useEffect, useMemo, useState,} from "react";
import "./styles/table.css"
import {useTypeSelector} from "../../hook/use-typed-selector";
import {CreateContent} from "./lib/create-dom/create-content";
import {useActions} from "../../hook/use-actions";
import {componentsStyle} from "../../servers/css/components_style";
import {Paginator} from "./paginator/paginator";
import {PaginatorType} from "../../interface/table-data/PaginatorConfig";
import {generatorStyle} from "../../servers/css/generator_style";

export function Table(props:any){
    const  {CreateCheckboxData, DataSaveTable}= useActions();
    const  components = useTypeSelector(state => state.components.components);
    const table:any = components[props.id];
    let paginator = <></>;
    useEffect(()=>{
        if (table){
            DataSaveTable(table.id);
        }
    }, [table.id])
    /**
     * #TODO CreateContent отрабатывает при каждом скролле критично!
     */
    // const {header, body} = useMemo(()=>{
        console.log('CreateContent')
        const  {body, header} = CreateContent(table);
        // return {body, header}
    // }, [table.data, table.paginator.page, table.sort_rule])
    console.log(body, header)
    useEffect(()=>{
        if (table && table.data){
            CreateCheckboxData(table.id);
        }
    }, [table.data])

    if (!table){
        return  (<><div>Таблица не иницилизирована!</div> </>)
    }
    const {components_style} = componentsStyle(table);
    const {style:styleBody} = generatorStyle(table?.style?.body, 'table_body');
    const {style:styleHeader} = generatorStyle(table?.style?.header, 'table_header');
    if (table.paginator.type === PaginatorType.page){
        paginator = <Paginator id={props.id} />
    }
    return(
        <>
            <div className="table components" data-id={table.id} style={components_style} >
                    <div className="table__header"  style={styleHeader}>
                        {header}
                    </div>
                <div className="table__body" style={styleBody}>
                    {body}
                </div>
                <div className="paginator__table">
                    {paginator}
                </div>

            </div>
        </>
    )
}