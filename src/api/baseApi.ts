import {AxiosResponse} from "axios";
import {store} from "../store";
import {AlertTypes} from "../store/type/alert";

/**
 *
 * @function baseApi - обработаывается каждым запросом на бэк
 * есть обработки:
 * 1. проверка наличия ключа info который хранит строку которую нужно вывести в алетр после вызова запроса
 */
export function baseApi(result: AxiosResponse<any, any>){
    if (result.data.info){
        if (result.status === 200){
            store.dispatch( {type: AlertTypes.CREATE_ALERT, payload: { data: { text: result.data.info, type: "success" } } } )
        }
        else if (result.status === 404){
            store.dispatch( {type: AlertTypes.CREATE_ALERT, payload: { data: { text: result.data.info, type: "errors" } } } )
        }
    }
    return result;
}