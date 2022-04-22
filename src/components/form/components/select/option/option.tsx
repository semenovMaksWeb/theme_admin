import React from "react";
// import {useTypeSelector} from "../../../../../hook/use-typed-selector";
import {useActions} from "../../../../../hook/use-actions";

export function Option(props:any) {
    // const  components = useTypeSelector(state => state.components.components);
    // const form:any = components[props.id_form];
    const {UpdateValuesForm} = useActions();
    const updateData=(event:any)=>{
        UpdateValuesForm(props.id_form, props.elem.id, {id:props.id, name: props.name})
    };
    return (
        <div onMouseDown={updateData}  className="select__option" data-key={props.id}>
            {props.name}
        </div>
    )
}