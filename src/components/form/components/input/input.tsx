import React from "react";
import {useTypeSelector} from "../../../../hook/use-typed-selector";
import {useActions} from "../../../../hook/use-actions";

export function Input(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const {UpdateValuesForm} = useActions()
    const updateData=(event:any)=>{
        UpdateValuesForm(props.id_form, props.elem.id, event.target.value)
    }
    const form:any = components[props.id_form];
    return(
        <input value={form.values[props.elem.id]} onChange={updateData} type="text" className="form__input"/>
    )
}