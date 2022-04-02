import React from "react";
import {Label} from "../label/label";
import {FormSlot} from "../../form_slot";
import  "./wrapper.css"
import {ErrorsText} from "../errors_text/errors_text";
export function Wrapper(props:any){
    const { elem } = FormSlot({elem:[props.elem], id_form:  props.id_form  }, true);
    return(
        <>
            <div  className="form__wrapper_container">
                <div  className="form__wrapper">
                    <Label elem={props.elem.label}/>
                    {elem}
                </div>
                <ErrorsText id_form={props.id_form} elem={props.elem} />
            </div>
        </>

    )
}