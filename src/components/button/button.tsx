import React from "react";
import {useTypeSelector} from "../../hook/use-typed-selector";

export function Button(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const button:any = components[props.id];
    if (!button){
        return  (<><div>кнопка не иницилизирована!</div> </>)
    }
    return(
        <>
            <button data-id={button.id} title={button.title}>{button.text}</button>
        </>
    )
}