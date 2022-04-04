import {GeneratorClass} from "../../interface/generatorClass";

/**
 * @function generatorClass
 * универсальная функция которая по флагу добавляет классы к элементам по условию
 */
export function generatorClass(classParams:GeneratorClass){
    const className = [];
    if (classParams.hidden_text_overflow){
        className.push("hidden-text-overflow");
    }
    return { className };
}