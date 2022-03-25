import React from "react";
import {useTypeSelector} from "../../hook/use-typed-selector";
import {FormSlot} from "./form_slot";

export function Form(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const form:any = components[props.id];
    const {elem} = FormSlot({elem: form.schema, id_form:props.id});
    console.log(elem)
    return (
        <form className="form">
            {elem}
        </form>
    )
}