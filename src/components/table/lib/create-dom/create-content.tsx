import React from "react";

export function createContent(table:any){
    const body:any = [];
    const header:any = [];

    for (const dataset of table.data){
        for (const key in table.schema) {
            const elem = table.schema[key];
            header.push(<div key={elem.key} className="table__th">{elem.title}</div>);
            body.push(<div key={elem.key} className="table__td">{dataset[key]}</div>)
        }
    }
    return {
        header, body
    }
}