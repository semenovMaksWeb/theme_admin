import React from "react";
import {FormSlot} from "../../form_slot";

export function Fieldset(props:any){
    const { elem } = FormSlot({elem: props.elem.children, id_form:props.id_form})
    return(
        <fieldset className="form__fieldset">
            <legend className="form__legend">{props.elem.legend.text}</legend>
            {elem}
        </fieldset>
    )
}