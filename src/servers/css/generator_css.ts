import {GeneratorStyle} from "../../interface/generatorStyle";

export function GeneratorCss(style:GeneratorStyle){
    const className = [];
    if (style.hidden_text_overflow){
        className.push("hidden-text-overflow");
    }
    return { className };
}