import React, {useMemo} from "react";
import {style_all_result} from "../lib/create-dom/create-content";
import {typeSchemaTable} from "../../../interface/type/typeSchemaTable";
import {Button} from "../../button/button";

// props dataset,  elem, class
export function Td(props:any){
    const {style, content} = useMemo(() => {
        let content = <></>
        const style = style_all_result(props.elem);
        if (props.elem.type === typeSchemaTable.td){
            content = <>{props.dataset[props.elem.key]}</>
        }
        if (props.elem.type === typeSchemaTable.button){
            content = <> <Button id={props.elem.button} context={props.dataset}/></>;
        }
        return {style, content}
    },[ props.dataset[props.elem.key] ])

    return (
        <div className={props.class} title={props.dataset[props.elem.key]}
             style={style}
        >
            {content}
        </div>
    )
}