import React from "react";

/**
 *
 * @param elem
 * функция возвращает стили указывающию ширину контента ячейки
 */
export function style_all_result(elem:any){
    return {
        "--width__elem": `${elem.w}px`
    } as React.CSSProperties;
}
