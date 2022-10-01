import {useTypeSelector} from "../../hook/use-typed-selector";
import React from "react";
import "./alert.css"
import {images} from "../../servers/images/images";
import {store} from "../../store";
import {AlertTypes} from "../../store/type/alert";

export  interface AlertProps{
    index: number,
}


export function Alert(props:AlertProps){
    const  alert = useTypeSelector(state => state.alert.alert[props.index]);
    const className = `${alert.type} alert`;
    const click = ()=> {
        store.dispatch({type:AlertTypes.DELETE_ALERT, payload: {index:props.index}});
    };
    return(
        <>
            <div className={className}>
                <img onClick={click}  className="alert_close" src={images('cancel.png')} alt=""/>
                {alert.text}
            </div>
        </>
    )
}