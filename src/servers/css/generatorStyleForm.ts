export function generatorStyleForm(styleParams?:any, prefect:string=""){
    const style:any = {};
    if (!styleParams){
        return {};
    }
    if (styleParams.display){
        style[`--${prefect}_display`] = styleParams.display;
    }
    if (styleParams['align-items']){
        style[`--${prefect}_align-items`] = styleParams['align-items'];
    }
    if (styleParams['align-items']){
        style[`--${prefect}_align-items`] = styleParams['align-items'];
    }
    return style;
}