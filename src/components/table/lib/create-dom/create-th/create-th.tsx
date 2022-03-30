import React from "react";
import {SortConfig} from "../../../../../interface/table-data/SortConfig";
import {createThSort} from "./create-th-sort";
import {thOnclick} from "./th-onclick";
import {style_all_result} from "../create-content";
export function createTh(elem:any, classTh:string,  table: any){
    const  style = style_all_result(elem);
    const sort_rule  = table.sort_rule?.filter((e:SortConfig) =>
        e.key === elem.key
     )[0]
    const onClickTh = (event:any)=>{
        thOnclick(elem, table, event, sort_rule);
    }
    let sort = createThSort(elem, sort_rule);
    return  (
        <div  onClick={onClickTh}
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