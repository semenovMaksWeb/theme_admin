import React from "react";


function style_all_result(elem:any){
    return {
        "--width__elem": `${elem.w}px`
    } as React.CSSProperties;
}

export function createContent(table:any){
    const body:any = [];
    const header:any = [];
    for (const key in table.schema) {
        const elem = table.schema[key];
        const  style = style_all_result(elem);
        header.push(<div key={elem.key} className="table__th table_elem" style={style}>
            {elem.title}
        </div>);
    }


    for (const dataset of table.data){
        const row = [];

        for (const key in table.schema) {
            const elem = table.schema[key];
            const  style = style_all_result(elem);
            row.push(<div key={elem.key} className="table__td table_elem" style={style}>{dataset[key]}</div>);
        }
        body.push(<div key={dataset.id} className="table__tr">{row}</div>);
    }
    return {
        header, body
    }
}