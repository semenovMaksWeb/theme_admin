import React, {useMemo} from "react";
import {useTypeSelector} from "../../../../hook/use-typed-selector";
import "./errors_text.css"
export function ErrorsText(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const form:any = components[props.id_form];
    const  errorsText = useMemo(()=>{
        const errorsText = [];
        if (form.errors[props.elem.id]){
            // это массив!
            if (Array.isArray(form.errors[props.elem.id])){
                for (const text_errors of form.errors[props.elem.id]) {
                    errorsText.push(<span key={text_errors} className="form__error-text">{text_errors}</span>)
                }
            }
            // это не массив!
            else {
                errorsText.push(<span key={form.errors[props.elem.id]} className="form__error-text">{form.errors[props.elem.id]}</span>)
            }
        }
        return errorsText
    }, [form.errors[props.elem.id]])


    return (
        <>
            <div className="form__error-wrapper">
                {errorsText}
            </div>
        </>
    )
}