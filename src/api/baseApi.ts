import {AxiosResponse} from "axios";
import {store} from "../store";
import {AlertTypes} from "../store/type/alert";

export function baseApi(result: AxiosResponse<any, any>){
    if (result.data.info){
        store.dispatch( {type: AlertTypes.CREATE_ALERT, payload: { data: { text: result.data.info, type: "success" } } } )
    }
    return result;
}