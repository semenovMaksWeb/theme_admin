import React from "react";
import {useTypeSelector} from "../../hook/use-typed-selector";
import {FormSlot} from "./form_slot";
import {componentsStyle} from "../../servers/css/components_style";

export function Form(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const form:any = components[props.id];
    const {elem} = FormSlot({elem: form.schema, id_form:props.id});
    const {components_style} = componentsStyle(form);
    return (
        <form className="form components" data-id={props.id} style={components_style}>
            {elem}
        </form>
    )
}