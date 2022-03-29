import React from "react";
import {Svg} from "../../../../svg/svg";
import {SortConfig} from "../../../../../interface/table-data/SortConfig";

export function createThSort(elem:any, sort_rule?:SortConfig){
    let sort: JSX.Element = (<></>);
    let url = "arrow_down.svg";
    let active = "";
    if (elem.sort){
        if (sort_rule){
            active = "active";
        }
        if (sort_rule?.type === "desc"){
            url = "arrow_up.svg"
        }
        sort = (<div className={'th__sort ' + active}>
            <Svg class="th__sort_icons" url={url}  />
        </div>);
        return sort;
    }
}