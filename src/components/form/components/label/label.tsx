import React from "react";

export function Label(props:any){
    return(
        <label className="form__label"> {props.elem.text} </label>
    )
}