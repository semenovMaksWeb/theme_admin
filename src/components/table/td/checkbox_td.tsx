import React, {useMemo} from "react";
import {ComponentsTypes} from "../../../store/type/components";
import {store} from "../../../store";
import {useTypeSelector} from "../../../hook/use-typed-selector";

export function CheckboxTd(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const table:any = components[props.id];
    const key_checkbox = props.dataset[table.key_main];
    const change = (event:any)=>{
        table.checkbox_data[key_checkbox] = event.target.checked;
        store.dispatch({
            type: ComponentsTypes.CREATE_CHECKBOX_COMPONENT,
            payload:  {id: table.id, data:  table.checkbox_data}
        })
    }
    const value = useMemo(()=>{
        let value = false;
        if(table.checkbox_data[key_checkbox]){
            value = table.checkbox_data[key_checkbox];
        }
        return value;
    }, [table.checkbox_data[key_checkbox]] )
    return (
        <div key={ key_checkbox} className="table__td table_elem"><
            input type="checkbox" checked={value} onChange={change}/>
        </div>
    )


}