import React, {useMemo} from "react";
import {Svg} from "../../svg/svg";
import {SortConfig} from "../../../interface/table-data/SortConfig";

export function ThSort(elem:any, sort_rule?:SortConfig){
    const {active, url} = useMemo(()=>{
        let url = "";
        if (elem.sort){
            url = "arrow_down.svg";
        }
        let active = "";
        if (elem.sort){
            if (sort_rule){
                active = "active";
            }
            if (sort_rule?.type === "desc"){
                url = "arrow_up.svg"
            }
        }
        return {url, active}
    }, [elem.sort, sort_rule?.type])
    return (
        <div className={'th__sort ' + active}>
            <Svg class="th__sort_icons" url={url}  />
        </div>
    );
}