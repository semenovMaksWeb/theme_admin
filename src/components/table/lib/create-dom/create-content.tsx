import React from "react";
import {typeSchemaTable} from "../../../../interface/typeSchemaTable";
import {Button} from "../../../button/button";

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

    //header генерация
    for (const key in table.schema) {
        const elem = table.schema[key];
        const  style = style_all_result(elem);
        header.push(<div key={elem.key} className="table__th table_elem" style={style}>
            {elem.title}
        </div>);
    }

    //body генерация
    for (const dataset of table.data){
        const row = [];

        for (const key in table.schema) {
            const elem = table.schema[key];
            const  style = style_all_result(elem);
            if (elem.type === typeSchemaTable.td){
                row.push(<div key={elem.key} className="table__td table_elem" style={style}>{dataset[key]}</div>);
            }
            if (elem.type === typeSchemaTable.button){
                row.push(<div key={elem.key} className="table__td table_elem" style={style}>
                    <Button id={elem.button} context={dataset}/>
                </div>);
            }
        }
        body.push(<div key={dataset.id} className="table__tr">{row}</div>);
    }
    return {
        header, body
    }
}