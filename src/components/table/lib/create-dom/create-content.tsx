import React from "react";
import {typeSchemaTable} from "../../../../interface/type/typeSchemaTable";
import {Button} from "../../../button/button";
import {generatorClass} from "../../../../servers/css/generator_class";
import { CreateCheckboxTd } from "./create_checkbox_td";
import {TableCheckboxData} from "../../../../interface/tableCheckboxData";
import {createTh} from "./create-th/create-th";
import {table_data} from "../table-data";

/**
 *
 * @param elem
 * функция возвращает стили указывающию ширину контента ячейки
 */
export function style_all_result(elem:any){
    return {
        "--width__elem": `${elem.w}px`
    } as React.CSSProperties;
}
/**
 *
 * @param table
 * функция возвращает body, header таблицы
 */
export function CreateContent(table:any ){
    if (!table.data && table?.data?.length !== 0){
        return {body: [], checkbox: [], header: []};
    }
    const body:any = [];
    const header:any = [];
    const { className } = generatorClass(table.class);
    const classTh = `table__th table_elem ${className}`
    const classTd = `table__td table_elem ${className}`
    const classTr = `table__tr`
    //header генерация
    if (table.checkbox_td){
        header.push(<div key='checkbox_th' className={classTh}></div>);
    }
    for (const key in table.schema) {
        const elem = table.schema[key];
        header.push(createTh(elem, classTh, table));
    }

    //body генерация
    const data = table_data(table.data, table);
    for (const dataset of data){
        const row = [];
        if (table.checkbox_td){
            const { row_checkbox } = CreateCheckboxTd(table, dataset);
            row.push(row_checkbox);
        }
        for (const key in table.schema) {
            const elem = table.schema[key];
            const style = style_all_result(elem);
            if (elem.type === typeSchemaTable.td){
                row.push(
                    <div title={dataset[key]}
                         key={elem.key}
                         className={classTd}
                         style={style}
                    >
                        {dataset[key]}
                    </div>);
            }
            if (elem.type === typeSchemaTable.button){
                row.push(<div key={elem.key} className={classTd} style={style}>
                    <Button id={elem.button} context={dataset}/>
                </div>);
            }
        }
        body.push(<div key={dataset[table.key_main]} className={classTr}>{row}</div>);
    }
    return {
        header, body
    }
}