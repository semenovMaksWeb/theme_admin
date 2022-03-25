import {CallbackName, ConfigCallback} from "../../interface/config/configCallback";
import {callbackApi} from "./api";
import {CallbackDeleteTableRow} from "./delete_table_row";
import {reset_values_form} from "./reset_values_form";

export async function Callback(event:any, configCallback:ConfigCallback[], content:any={}){
    event.preventDefault();
    if (!configCallback){
        return;
    }
    let index = -1;
    for (const config of configCallback) {
        index++;
        if (config.name === CallbackName.api){
            const res = await callbackApi(config, content);
            content[index] = res.data;
        }
        if (config.name === CallbackName.delete_table_row){
            CallbackDeleteTableRow(config, content);
        }
        if (config.name === CallbackName.reset_values_form){
            reset_values_form(config.params.id);
        }
    }
}