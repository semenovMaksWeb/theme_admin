import React from "react";
import {useActions} from "../../../../hook/use-actions";
import {TableCheckboxData} from "../../../../interface/tableCheckboxData";

export function CreateCheckboxTd(table:any, dataset:any, index:number){

    const key_checkbox = dataset[table.key_main];
    const row_checkbox =  <div key={key_checkbox} className="table__td table_elem"><input type="checkbox"/></div>;
    const checkbox_value:TableCheckboxData = {key: dataset[table.key_main], value:false };
    return {
        row_checkbox,
        checkbox_value
    }


}