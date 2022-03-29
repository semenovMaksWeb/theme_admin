import React from "react";
export function createTh(elem:any, classTh:string, style:any){
    let sort: JSX.Element = (<></>);
    if (elem.sort){
        sort = (<div className="th__sort">сорт!</div>);
    }
    console.log(elem.sort)
    return  (
        <div
            title={elem.title}
            key={elem.key}
            className={classTh}
            style={style}
        >
            {sort}
            {elem.title}
        </div>
    )
}