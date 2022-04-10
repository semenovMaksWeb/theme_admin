import React from "react";
import "./label.css"
export function Label(props:any){
    return(
        <label className="form__label"> {props.elem.text} </label>
    )
}