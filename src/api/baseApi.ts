import {AxiosResponse} from "axios";

export function baseApi(result: AxiosResponse<any, any>){
    if (result.data.info){
        console.log('нужно вывести алерт!')
    }
    return result;
}