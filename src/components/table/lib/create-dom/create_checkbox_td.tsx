import React from "react";
import {TableCheckboxData} from "../../../../interface/tableCheckboxData";
import {ComponentsTypes} from "../../../../store/type/components";
import {store} from "../../../../store";

export function CreateCheckboxTd(table:any, dataset:any, index:number){
    const key_checkbox = dataset[table.key_main];
    const change = (event:any)=>{
        table.checkbox_data[index].value = event.target.checked;
        store.dispatch({
            type: ComponentsTypes.CREATE_CHECKBOX_COMPONENT,
            payload:  {id: table.id, data:  table.checkbox_data}
        })
    }
    const row_checkbox =  (
        <div key={ key_checkbox} className="table__td table_elem"><
            input type="checkbox" value={table.checkbox_data[index]?.value} onChange={change}/>
        </div>
    );
    const checkbox_value:TableCheckboxData = {key: dataset[table.key_main], value:false };
    return {
        row_checkbox,
        checkbox_value
    }


}