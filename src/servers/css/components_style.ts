import React from "react";

export function componentsStyle(elem:any){
    const components_style = {
        '--component-order': elem.order ? elem.order: null,
        '--component-margin': elem.margin ? elem.margin: null
    }as React.CSSProperties;
    return {
        components_style
    }
}