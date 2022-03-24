import React from "react";
import {Fieldset} from "./components/fieldset/fieldset";
import {Wrapper} from "./components/wrapper/wrapper";
import {Input} from "./components/input/input";
import {Button} from "../button/button";

export function FormSlot(props:any, check_wrapper= false){
    const elem:any  = [];
    for (const e of props.elem) {
        if (e.type === "fieldset"){
            elem.push(<Fieldset key={e.id} elem={e}/>);
            continue;
        }
        if (e.type === "button"){
            elem.push(<Button key={e.id} elem={e}/>);
            continue;
        }
        if (!check_wrapper){
            elem.push(<Wrapper key={e.order} elem={e}/>);
            continue;
        }
        if (e.type === "input"){
            elem.push(<Input key={e.id} elem={e}/>);
            continue;
        }

    }
    return {elem}
}