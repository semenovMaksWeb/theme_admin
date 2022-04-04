import React, {useMemo} from "react";
import {Fieldset} from "./components/fieldset/fieldset";
import {Wrapper} from "./components/wrapper/wrapper";
import {Input} from "./components/input/input";
import {Button} from "../button/button";

export function FormSlot(props: any, check_wrapper = false){
    const  elem = useMemo(()=>{
        console.log('FormSlot')
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
            if (!check_wrapper){
                elem.push(<Wrapper key={e.order} elem={e} id_form={props.id_form} />);
                continue;
            }
            if (e.type === "input"){
                elem.push(<Input key={e.id} elem={e} id_form={props.id_form} />);
                continue;
            }

        }
        return elem;
    }, [props.elem])

    return {elem}
}