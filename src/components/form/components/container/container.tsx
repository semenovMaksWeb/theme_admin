import React, {useMemo} from "react";
import {FormSlot} from "../../form_slot";
import  "./form_container.css"
import {generatorStyleForm} from "../../../../servers/css/generatorStyleForm";
export function Container(props:any) {
    const { elem } = FormSlot({elem: props.elem.children, id_form:props.id_form});
    const style = useMemo(()=>{
        return generatorStyleForm(props.elem.style, 'form__container')
    }, [props.elem])
    return (<div className="form__container" style={style}>
        {elem}
    </div>)
}