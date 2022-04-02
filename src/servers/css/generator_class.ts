import {GeneratorClass} from "../../interface/generatorClass";

export function generatorClass(classParams:GeneratorClass){
    const className = [];
    if (classParams.hidden_text_overflow){
        className.push("hidden-text-overflow");
    }
    return { className };
}