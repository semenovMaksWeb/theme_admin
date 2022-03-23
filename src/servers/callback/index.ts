import {ConfigCallback} from "../../interface/config/configCallback";
import {callbackApi} from "./api";

export async function Callback(configCallback:ConfigCallback[], content:any){
    if (!configCallback){
        return;
    }
    for (const config of configCallback) {
        if (config.name === "api"){
            await callbackApi(config, content);
        }
    }
}