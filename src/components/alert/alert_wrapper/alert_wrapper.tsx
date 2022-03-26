import {useTypeSelector} from "../../../hook/use-typed-selector";
import React from "react";
import {Alert} from "../alert";
import "./alert_wrapper.css"
export function AlertWrapper(){
    const  alertAll = useTypeSelector(state => state.alert.alert);
    const alertHtml = alertAll.map((e, index:number)=>
        (<Alert key={index} index={index} /> )
    );
    return(
        <>
            <div className="alert__wrapper">
                {alertHtml}
            </div>
        </>
    )
}