import React, {useMemo} from "react";
import {useTypeSelector} from "../../hook/use-typed-selector";
import { useHistory } from 'react-router-dom'
import "./button.css"
import {Callback} from "../../servers/callback";
import {componentsStyle} from "../../servers/css/components_style";
import {Svg} from "../svg/svg";
import {ContextType} from "../../interface/type/ContextType";

export interface ButtonProps {
    id?:number,
    elem?:any,
    context?:ContextType,
    id_form?:number
}

export function Button(props:ButtonProps){
    const history = useHistory();
    const  components = useTypeSelector(state => state.components.components);
    // кнопка пропсом или глобальной cms
    const button = useMemo(()=>{
        let button:any;
        if (!props.elem && props.id){
            button = components[props?.id];
        }else {
            button = props.elem;
        }
        return button;
    }, [props.elem, props?.id] );
    // проверка нужно ли рисовать в кнопке иконку
    const icons = useMemo(()=>{
        let icons:JSX.Element = <></>;
        if (button?.icons?.type === "svg"){
            icons = <Svg url={button.icons.url}/>
        }
        if (button?.icons?.type === "image"){
            icons =  <img src={button.icons.url} alt={button.icons.url} />
        }
        return icons;
    },[button]);

    if (!button){
        return  (<><div>кнопка не иницилизирована!</div> </>)
    }
    const clickButton = async (event:any)=>{
        await Callback(event,button?.event?.click, props.context, history);
    };
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
                {icons}
            </button>
        </>
    )
}