// import {useTypeSelector} from "../../../../hook/use-typed-selector";
import {FormSlot} from "../../form_slot";
import React, {useEffect} from "react";
import {frontData} from "../../../../servers/front_data";
import {generatorUrlApi} from "../../../../api/generatorUrlApi";
import {useActions} from "../../../../hook/use-actions";
export function Rows(props:any) {
    const {UpdateValuesForm} = useActions();
    useEffect(()=>{
        (async ()=>{
            if (props.elem.api_data){
                const {body, params } = frontData(props.elem.api_data.config, {});
                const response = await generatorUrlApi(props.elem.api_data.url, params, body);
                UpdateValuesForm(props.id_form, props.elem.id, response?.data);
            }
        })();
    }, [props.elem]);
    const { elem } = FormSlot({elem: props.elem.children, id_form:  props.id_form  });
    return (<div className="form__rows-container">
        {elem}
    </div>);
}