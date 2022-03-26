import React from "react";
import {typeSchemaTable} from "../../../../interface/type/typeSchemaTable";
import {Button} from "../../../button/button";
import {GeneratorCss} from "../../../../servers/css/generator_css";
import { CreateCheckboxTd } from "./create_checkbox_td";
import {TableCheckboxData} from "../../../../interface/tableCheckboxData";

/**
 *
 * @param elem
 * функция возвращает стили указывающию ширину контента ячейки
 */
function style_all_result(elem:any){
    return {
        "--width__elem": `${elem.w}px`
    } as React.CSSProperties;
}
/**
 *
 * @param table
 * функция возвращает body, header таблицы
 */
export function CreateContent(table:any){
    console.log(table)
    if (!table.data){
        return {body: [], checkbox: [], header: []};
    }
    const body:any = [];
    const header:any = [];
    const { className } = GeneratorCss(table.style);
    const classTh = `table__th table_elem ${className}`
    const classTd = `table__td table_elem ${className}`
    const classTr = `table__tr`
    //header генерация
    if (table.checkbox_td){
        header.push(<div key='checkbox_th' className={classTh}></div>);
    }
    for (const key in table.schema) {
        const elem = table.schema[key];
        const  style = style_all_result(elem);
        header.push(<div key={elem.key} className={classTh} style={style}>
            {elem.title}
        </div>);
    }

    //body генерация
    const checkbox:TableCheckboxData[] = [];
    let index = -1;
    for (const dataset of table.data){
        index++;
        const row = [];
        if (table.checkbox_td){
            const { checkbox_value, row_checkbox } = CreateCheckboxTd(table, dataset, index);
            checkbox.push(checkbox_value);
            row.push(row_checkbox);
        }
        for (const key in table.schema) {
            const elem = table.schema[key];
            const style = style_all_result(elem);
            if (elem.type === typeSchemaTable.td){
                row.push(<div key={elem.key} className={classTd} style={style}>{dataset[key]}</div>);
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
        header, body, checkbox
    }
}