import React from "react";

export function componentsStyle(elem:any){
    const components_style = {
        '--component-order': elem?.style?.order ? elem.style.order: 0,
        '--component-margin': elem?.style?.margin ? elem.style.margin: "0px",
        '--component-color': elem?.style?.color ? elem.style.color: "inherit",
        '--component-border': elem?.style?.border ? elem.style.border: "inherit",
        '--component-border-radius':  elem?.style?.border_radius ? elem.style.border_radius: "inherit",
    }as React.CSSProperties;
    return {
        components_style
    }
}