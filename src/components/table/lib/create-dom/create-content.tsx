import React from "react";

export function createContent(table:any){
    const body:any = [];
    const header:any = [];
    for (const key in table.schema) {
        const elem = table.schema[key];
        header.push(<div key={elem.key} className="table__th table_elem">
            <div className="">{elem.title}</div>
        </div>);
    }


    for (const dataset of table.data){
        const row = [];
        for (const key in table.schema) {
            const elem = table.schema[key];
            row.push(<div key={elem.key} className="table__td table_elem" >{dataset[key]}</div>);
        }
        body.push(<div key={dataset.id} className="table__tr">{row}</div>);
    }
    return {
        header, body
    }
}