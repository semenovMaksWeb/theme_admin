import React from "react";
import {useTypeSelector} from "../../hook/use-typed-selector";

import {Callback} from "../../servers/callback";
export function Button(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const button:any = components[props.id];
    if (!button){
        return  (<><div>кнопка не иницилизирована!</div> </>)
    }
    const clickButton = async ()=>{
        await Callback(button?.event?.click, props.context);
    }
    return(
        <>
            <button onClick={clickButton} data-id={button.id} title={button.title}>{button.text}</button>
        </>
    )
}