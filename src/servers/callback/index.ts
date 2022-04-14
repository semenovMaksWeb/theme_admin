import {CallbackName, ConfigCallback} from "../../interface/config/configCallback";
import {callbackApi} from "./api";
import {CallbackDeleteTableRow} from "./table/delete_table_row";
import {reset_value_form_key, reset_values_form} from "./form/reset_values_form";
import {add_table_row} from "./table/add_table_row";
import {router_push} from "./router_push";
import {errorsBack} from "./errors-back";
import {update_manual} from "./form/update_manual";
import {add_rows_values_form} from "./form/add_rows_values_form";
import {delete_rows_values_form} from "./form/delete_rows_values_form";

export async function Callback(event:any, configCallback:ConfigCallback[], content:any={}, history?:any){
    if (event){
        event.preventDefault();
    }
    if (!configCallback){
        return;
    }
    let index = -1;
    for (const config of configCallback) {
        index++;
        if (config.name === CallbackName.api) {
            const res = await callbackApi(config, content);
            if (res?.data){
                content[index] = res.data;
            }
            /**
             * #TODO составить список при каких условии не нужно выполнять калбек функции дальше!
             */
            if (res?.status !== 200){
                await errorsBack(config.params.errors, res?.data.errors)
                return;
            }
        }
        if (config.name === CallbackName.delete_table_row) {
            CallbackDeleteTableRow(config, content);
        }
        if (config.name === CallbackName.reset_values_form) {
            reset_values_form(config.params.id);
        }
        if (config.name === CallbackName.reset_value_form_key) {
            reset_value_form_key(config.params.id, config.params.key);
        }
        if (config.name === CallbackName.add_table_row) {
            add_table_row(config, content);
        }
        if (config.name === CallbackName.router_push) {
            router_push(config, content, history);
        }
        if (config.name === CallbackName.update_manual){
            await update_manual(config);
        }
        if (config.name === CallbackName.add_rows_values_form){
            await add_rows_values_form(config, content);
        }
        if (config.name === CallbackName.delete_rows_values_form){
            delete_rows_values_form(config.params, content);
        }
    }
}