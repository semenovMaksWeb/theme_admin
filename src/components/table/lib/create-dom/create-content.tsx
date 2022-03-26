import React from "react";
import {typeSchemaTable} from "../../../../interface/type/typeSchemaTable";
import {Button} from "../../../button/button";
import {GeneratorCss} from "../../../../servers/css/generator_css";

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
export function createContent(table:any){
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
    const checkbox = [];
    for (const dataset of table.data){
        const row = [];
        if (table.checkbox_td){
            const key_checkbox = dataset[table.key_main];
            checkbox.push({key: dataset[table.key_main], value:false });
            row.push(<div key={key_checkbox} className="table__td table_elem"><input type="checkbox"/></div>);
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
    console.log(checkbox)
    return {
        header, body
    }
}