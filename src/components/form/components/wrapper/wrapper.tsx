import React from "react";
import {Label} from "../label/label";
import {FormSlot} from "../../form_slot";

export function Wrapper(props:any){
    const { elem } = FormSlot({elem:[props.elem], id_form:  props.id_form  }, true);
    return(
        <p className="form__wrapper">
            <Label elem={props.elem.label}/>
            {elem}
        </p>
    )
}