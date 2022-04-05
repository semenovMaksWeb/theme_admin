import {useTypeSelector} from "../../../hook/use-typed-selector";
import {generatorStyle} from "../../../servers/css/generator_style";
import React, {useMemo} from "react";
import {generatorClass} from "../../../servers/css/generator_class";
import {Th} from "../th/th";

export function Header(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const table:any = components[props.id];

    const {style, header} = useMemo(()=>{
        const {style} = generatorStyle(table?.style?.header, 'table_header');
        const { className } = generatorClass(table.class);
        const classTh = `table__th table_elem ${className}`
        const header:any = [];
        if (table.checkbox_td){
            header.push(<div key='checkbox_th' className={classTh}></div>);
        }
        for (const key in table.schema) {
            const elem = table.schema[key];
            header.push(<Th elem={elem} class={classTh} id={props.id}  key={elem.key}/>)
        }

        return {
            style, header
        }
    }, [table.schema])
    return (
        <div className="table__header"  style={style}>
        {header}
        </div>
    )
}