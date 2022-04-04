import React from "react";

/**
 * @function componentsStyle
 * генерация стилей для каждого компонента универсальная функция
 * каждый компонент имеет эти переменные и обрабатывает их одинаковой логикой
 */
export function componentsStyle(elem:any){
    const components_style = {
        '--component-max_height':elem?.style?.max_height ? elem.style.max_height: "auto",
        '--component-width':elem?.style?.width ? elem.style.width: "auto",
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