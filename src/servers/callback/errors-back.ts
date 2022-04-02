import {store} from "../../store";
import {TypeComponents} from "../../interface/type/typeComponents";
import {ComponentsTypes} from "../../store/type/components";

export function ErrorsBack(config_errors?:any, errors?:any){
    if (config_errors){
        const components:any = store.getState().components.components[config_errors.id];
        if (components.type === TypeComponents.form){
            store.dispatch({type: ComponentsTypes.SAVE_ERRORS_FORM, payload: {
                id: config_errors.id, errors:errors
                }})
            console.log('это форма!!', components)
        }
    }
}