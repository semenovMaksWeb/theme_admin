/**
 * @function generatorStyle
 * функция универсальная используется для обраотки элементов компонентов который имеют разные название переменых
 * название переменых вначале имеют prefect отличительное имя после чего идет имя параметра
 */
export function generatorStyle(styleParams?:any, prefect:string=""){
    const style:any = {};
    if (!styleParams){
        return {};
    }
    if (styleParams.text_align){
        style[`--${prefect}_text_align`] = styleParams.text_align;
    }
    if (styleParams.color){
        style[`--${prefect}_color`] = styleParams.color;
    }
    return {style};
}