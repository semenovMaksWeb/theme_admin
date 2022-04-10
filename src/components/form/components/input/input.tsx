import React, {useMemo} from "react";
import {useTypeSelector} from "../../../../hook/use-typed-selector";
import {useActions} from "../../../../hook/use-actions";
import {addErrorsClass} from "../../lib/add-errors-class";
import {formValueCheck} from "../../lib/valueCheck";

export function Input(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const form:any = components[props.id_form];
    const {UpdateValuesForm} = useActions();
    const  className = useMemo(()=>{
        let className = "form__input";
        let checkErrors = addErrorsClass(form, props.elem);
        if (checkErrors){
            className += " errors"
        }
        return className;
    }, [form.errors[props.elem.id]]);

    const updateData=(event:any)=>{
        if (props.elem.id_parent && props.index){

            return;
        }
        UpdateValuesForm(props.id_form, props.elem.id, event.target.value)
    };
    const value = useMemo(()=>{
       return formValueCheck(props, form);
    }, [form.values[props.elem.id]] );
    return(
        <>
            <input value={value} onChange={updateData} type="text" className={className}/>
        </>

        )
}