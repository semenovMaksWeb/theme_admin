import React, {useMemo} from "react";
import {Fieldset} from "./components/fieldset/fieldset";
import {Wrapper} from "./components/wrapper/wrapper";
import {Input} from "./components/input/input";
import {Button} from "../button/button";
import {Select} from "./components/select/select";
import {Container} from "./components/container/container";
import {Rows} from "./components/rows/rows";


export function FormSlotValidJs(props:any, check_wrapper = false, index?:number) {
    const elem:any  = [];
    for (const e of props.elem) {
        if (e.type === "fieldset"){
            elem.push(<Fieldset key={e.id} elem={e} id_form={props.id_form} />);
            continue;
        }
        if (e.type === "button"){
            elem.push(<Button key={e.id} elem={e} id_form={props.id_form} />);
            continue;
        }
        if (e.type === "container"){
            elem.push(<Container key={e.id} elem={e} id_form={props.id_form} />);
            continue;
        }
        if (e.type === "rows"){
            elem.push(<Rows key={e.id} elem={e} id_form={props.id_form} />);
            continue;
        }
        if (!check_wrapper){
            elem.push(<Wrapper key={e.id} elem={e} id_form={props.id_form} index={index} />);
            continue;
        }
        if (e.type === "input"){
            elem.push(<Input key={e.id} elem={e} id_form={props.id_form} index={index} />);
            continue;
        }
        if (e.type === "select"){
            elem.push(<Select key={e.id} elem={e} id_form={props.id_form}  />)
        }
    }
    return elem;
}


export function FormSlot(props: any, check_wrapper = false, index?:number){
    const  elem = useMemo(()=>{
        return FormSlotValidJs(props, check_wrapper, index);
    }, [props.elem]);

    return {elem}
}