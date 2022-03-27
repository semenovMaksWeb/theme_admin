import React from "react";
import {useTypeSelector} from "../../hook/use-typed-selector";
import { useHistory } from 'react-router-dom'

import {Callback} from "../../servers/callback";
import {componentsStyle} from "../../servers/css/components_style";
export function Button(props:any){
    const history = useHistory();
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
        await Callback(event,button?.event?.click, props.context, history);
    }
    const {components_style} = componentsStyle(button);
    return(
        <>
            <button
                className="button components"
                onClick={clickButton}
                data-id={button.id}
                title={button.title}
                style={components_style}
            >
                {button.text}
            </button>
        </>
    )
}