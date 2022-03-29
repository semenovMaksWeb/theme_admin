import "./svg.css"
import React from "react";
import {svg} from "../../servers/images/images";

export interface TypePropsSvg {
    url: string,
    style?:React.CSSProperties,
    class?: string;
}

export  function Svg(props:TypePropsSvg){
    const class_name = `${props.class} object`
    return (
        <object className={class_name} data={svg(props.url)} type="image/svg+xml" />
    )
}