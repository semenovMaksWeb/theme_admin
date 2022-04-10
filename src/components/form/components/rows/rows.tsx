// import {useTypeSelector} from "../../../../hook/use-typed-selector";
import {FormSlot, FormSlotValidJs} from "../../form_slot";
import React, {useEffect, useMemo} from "react";
import {frontData} from "../../../../servers/front_data";
import {generatorUrlApi} from "../../../../api/generatorUrlApi";
import {useActions} from "../../../../hook/use-actions";
import {useTypeSelector} from "../../../../hook/use-typed-selector";
export function Rows(props:any) {
    const {UpdateValuesForm} = useActions();
    const  components = useTypeSelector(state => state.components.components);
    const form:any = components[props.id_form];
    useEffect(()=>{
        (async ()=>{
            if (props.elem.api_data){
                const {body, params } = frontData(props.elem.api_data.config, {});
                const response = await generatorUrlApi(props.elem.api_data.url, params, body);
                UpdateValuesForm(props.id_form, props.elem.id, response?.data);
            }
        })();
    }, [props.elem]);

    const rows_html = useMemo(() => {
        const rows_html:any = [];
        let index = -1;
        for(const rows of form.values[props.elem.id]){
            index++;
            const elem = FormSlotValidJs({elem: props.elem.children, id_form:  props.id_form }, false, index);
            rows_html.push(elem);
        }
        return rows_html;
    }, [form.values[props.elem.id]]);



    return (<div className="form__rows-container">
        {rows_html}
    </div>);
}