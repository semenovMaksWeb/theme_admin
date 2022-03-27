import React from "react";

export function componentsStyle(elem:any){
    const components_style = {
        '--component-order': elem?.style?.order ? elem.style.order: null,
        '--component-margin': elem?.style?.margin ? elem.style.margin: null
    }as React.CSSProperties;
    return {
        components_style
    }
}