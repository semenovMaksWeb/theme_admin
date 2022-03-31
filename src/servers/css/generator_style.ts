export function generatorStyle(styleParams?:any, prefect:string=""){
    const style:any = {};
    if (!styleParams){
        return {};
    }
    if (styleParams.text_align){
        style[`--${prefect}_text_align`] = styleParams.text_align;
    }
    return {style};
}