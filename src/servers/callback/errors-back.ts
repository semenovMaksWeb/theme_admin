import {store} from "../../store";
import {TypeComponents} from "../../interface/type/typeComponents";
import {ComponentsTypes} from "../../store/type/components";
import {Callback} from "./index";

export async function errorsBack(config_errors?:any, errors?:any, history?: any){
    console.log(config_errors)
    if (config_errors){
        if (config_errors.id){
            const components:any = store.getState().components.components[config_errors.id];
            if (components.type === TypeComponents.form){
                store.dispatch({type: ComponentsTypes.SAVE_ERRORS_FORM, payload: {
                        id: config_errors.id, errors:errors
                }})
            }
        return;
        }
        if (config_errors.callback){
           await  Callback(null,config_errors.callback, {} , history)
        }
    }
}