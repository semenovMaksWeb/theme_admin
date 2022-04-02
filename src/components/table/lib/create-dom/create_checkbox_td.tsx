import React from "react";
import {ComponentsTypes} from "../../../../store/type/components";
import {store} from "../../../../store";

export function CreateCheckboxTd(table:any, dataset:any){
    const key_checkbox = dataset[table.key_main];
    const change = (event:any)=>{
        table.checkbox_data[key_checkbox] = event.target.checked;
        store.dispatch({
            type: ComponentsTypes.CREATE_CHECKBOX_COMPONENT,
            payload:  {id: table.id, data:  table.checkbox_data}
        })
    }
    let value = false;
    if(table.checkbox_data[key_checkbox]){
        value = table.checkbox_data[key_checkbox];
    }
    const row_checkbox =  (
        <div key={ key_checkbox} className="table__td table_elem"><
            input type="checkbox" checked={value} onChange={change}/>
        </div>
    );
    return {
        row_checkbox,
    }


}