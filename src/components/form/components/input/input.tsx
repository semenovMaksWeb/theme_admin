import React from "react";
import {useTypeSelector} from "../../../../hook/use-typed-selector";
import {useActions} from "../../../../hook/use-actions";
import {ErrorsText} from "../errors_text/errors_text";
import {addErrorsClass} from "../../lib/add-errors-class";

export function Input(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const form:any = components[props.id_form];
    const {UpdateValuesForm} = useActions();
    let className = "form__input";
    let checkErrors = addErrorsClass(form, props.elem);
    if (checkErrors){
        className += " errors"
    }
    const updateData=(event:any)=>{
        UpdateValuesForm(props.id_form, props.elem.id, event.target.value)
    }
    return(
        <>
            <input value={form.values[props.elem.id]} onChange={updateData} type="text" className={className}/>
        </>

        )
}