import React, {useMemo} from "react";
import {Label} from "../label/label";
import {FormSlot} from "../../form_slot";
import  "./wrapper.css"
import {ErrorsText} from "../errors_text/errors_text";
import {generatorStyleForm} from "../../../../servers/css/generatorStyleForm";
export function Wrapper(props:any){
    const { elem } = FormSlot({elem:[props.elem], id_form:  props.id_form  }, true, props.index);
    const style_wrapper =  useMemo(()=>{
        return generatorStyleForm(props.elem.style_wrapper, 'form_wrapper');
    }, [props.elem]);
    return(
        <>
            <div  className="form__wrapper_container">
                <div  className="form__wrapper" style={style_wrapper}>
                    <Label elem={props.elem.label}/>
                    {elem}
                </div>
                <ErrorsText id_form={props.id_form} elem={props.elem} />
            </div>
        </>

    )
}