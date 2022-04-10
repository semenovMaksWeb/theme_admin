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
    if (styleParams['max-height']){
        style[`--${prefect}_max-height`] = styleParams['max-height'];
    }
    if (styleParams.overflow){
        style[`--${prefect}_overflow`] = styleParams.overflow;
    }
    if (styleParams.padding){
        style[`--${prefect}_padding`] = styleParams.padding;
    }
    if (styleParams.margin){
        style[`--${prefect}_margin`] = styleParams.margin;
    }

    return style;
}