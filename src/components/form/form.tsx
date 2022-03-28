import React, {useEffect} from "react";
import {useTypeSelector} from "../../hook/use-typed-selector";
import {FormSlot} from "./form_slot";
import {componentsStyle} from "../../servers/css/components_style";
import {frontData} from "../../servers/front_data";
import {ConvertSchemaValue} from "./lib/convert_schema_value";
import {generatorUrlApi} from "../../api/generatorUrlApi";

export function Form(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const form:any = components[props.id];
    const {elem} = FormSlot({elem: form.schema, id_form:props.id});
    const {components_style} = componentsStyle(form);
    useEffect(() => {
        (async ()=>{
            if (form && form.api_data){
                const {body, params} = frontData(form.api_data.config, {});
                const res = await generatorUrlApi(form.api_data.url, params, body);
                if (res?.data){
                    ConvertSchemaValue(form.id, res.data, form.api_data.schema_value);
                }
            }
        })();
    }, [form.id])
    return (
        <form className="form components" data-id={props.id} style={components_style}>
            {elem}
        </form>
    )
}