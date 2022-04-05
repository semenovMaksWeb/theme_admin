import React, {useMemo} from "react";
import {SortConfig} from "../../../interface/table-data/SortConfig";
import {style_all_result} from "../lib/create-dom/create-content";
import {thOnclick} from "./th-onclick";
import {ThSort} from "./th-sort";
import {useTypeSelector} from "../../../hook/use-typed-selector";

//elem
export function Th(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const table:any = components[props.id];

    const {style} = useMemo(()=>{
        const  style = style_all_result(props.elem);
        return {style}
    }, [props.elem])

    const {sort_rule} = useMemo(()=>{
        const sort_rule  = table.sort_rule?.filter((e:SortConfig) =>
            e.key === props.elem.key
        )[0]
        return {
            sort_rule
        }
    }, [table.sort_rule])

    const onClickTh = (event:any)=>{
        thOnclick(props.elem, table, event, sort_rule);
    }

    let sort = ThSort(props.elem, sort_rule);
    return  (
        <div  onClick={onClickTh}
              title={props.elem.title}
              className={props.class}
              style={style}
        >
            {sort}
            {props.elem.title}
        </div>
    )
}