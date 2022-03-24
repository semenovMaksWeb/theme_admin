import React from "react";
import {FormSlot} from "../../form_slot";

export function Fieldset(props:any){
    console.log(props.elem)
    const {elem} = FormSlot({elem: props.elem.children})
    return(
        <fieldset className="form__fieldset">
            <legend className="form__legend">{props.elem.legend.text}</legend>
            {elem}
        </fieldset>
    )
}