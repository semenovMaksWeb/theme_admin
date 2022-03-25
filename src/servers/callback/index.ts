import {ConfigCallback} from "../../interface/config/configCallback";
import {callbackApi} from "./api";
import {CallbackDeleteTableRow} from "./delete_table_row";

export async function Callback(event:any, configCallback:ConfigCallback[], content:any={}){
    event.preventDefault();
    if (!configCallback){
        return;
    }
    let index = -1;
    for (const config of configCallback) {
        index++;
        if (config.name === "api"){
            const res = await callbackApi(config, content);
            content[index] = res.data;
        }
        if (config.name === "delete_table_row"){
            CallbackDeleteTableRow(config, content);
        }
    }
}