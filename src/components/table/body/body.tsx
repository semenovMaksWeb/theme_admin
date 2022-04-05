import React, {useMemo} from "react";
import {generatorStyle} from "../../../servers/css/generator_style";
import {useTypeSelector} from "../../../hook/use-typed-selector";
import {CheckboxTd} from "../td/checkbox_td";
import {table_data} from "../lib/table-data";
import {generatorClass} from "../../../servers/css/generator_class";
import {Td} from "../td/td";

// id
export function Body(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const table:any = components[props.id];
    const {style} = generatorStyle(table?.style?.body, 'table_body');
    const body = useMemo(()=>{
        if (!table?.data){
            return  [];
        }
        const { className } = generatorClass(table.class);
        const classTd = `table__td table_elem ${className}`
        const classTr = `table__tr`
        const body =  [];
        const data = table_data(table.data, table);
        for (const dataset of data){
            const row = [];
            if (table.checkbox_td){
                row.push(<CheckboxTd dataset={dataset} id={props.id} key={dataset[table.key_main]}  /> );
            }
            for (const key in table.schema) {
                const elem = table.schema[key];
                row.push(
                    <Td dataset={dataset} elem={elem}  key={elem.key} title={dataset[key]}  class={classTd}  />
                )
            }
            body.push(
                <div key={dataset[table.key_main]} className={classTr}>{row}</div>
            );
        }
        return body
    },[table.data, table.paginator.page, table.sort_rule])
    return (
        <div className="table__body" style={style}>
            {body}
        </div>
    )

}
