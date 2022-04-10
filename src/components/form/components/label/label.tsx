import React from "react";
import "./label.css"
export function Label(props:any){
    console.log(props);
    return(
        <label className="form__label"> {props.elem.text} </label>
    )
}