import {ConfigCallback} from "../../interface/config/configCallback";
import {callbackApi} from "./api";
import {CallbackDeleteTableRow} from "./delete_table_row";

export async function Callback(event:any, configCallback:ConfigCallback[], content:any){
    event.preventDefault();
    if (!configCallback){
        return;
    }
    for (const config of configCallback) {
        if (config.name === "api"){
            await callbackApi(config, content);
        }
        if (config.name === "delete_table_row"){
            CallbackDeleteTableRow(config, content);
        }
    }
}