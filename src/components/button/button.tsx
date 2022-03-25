import React from "react";
import {useTypeSelector} from "../../hook/use-typed-selector";

import {Callback} from "../../servers/callback";
export function Button(props:any){
    const  components = useTypeSelector(state => state.components.components);
    let button:any;
    if (!props.elem){
        button = components[props.id];
    }else {
        button = props.elem;
    }
    if (!button){
        return  (<><div>кнопка не иницилизирована!</div> </>)
    }
    const clickButton = async (event:any)=>{
        await Callback(event,button?.event?.click, props.context);
    }
    return(
        <>
            <button onClick={clickButton} data-id={button.id} title={button.title}>{button.text}</button>
        </>
    )
}