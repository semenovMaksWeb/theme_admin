import axios from "axios";
import {apiUrl} from "../index-api";
import {baseApi} from "../baseApi";

export async function ThemeApiGetAll(){
   return baseApi(await axios.get(`${apiUrl}/theme/get_all`));
}
export async function ThemeApiGetId(params:{id:number}){
    return baseApi(await axios.get(`${apiUrl}/theme/get_id`, {params:{...params}} ) );
}
export async function ThemeApiDeleteId(params:{id:number}){
    return baseApi(await axios.delete(`${apiUrl}/theme/delete`, {params:{...params}}));
}
export async function ThemeApiSave(params: any, body:{name:string, description:string}){
    return baseApi(await axios.post(`${apiUrl}/theme/save`, {...body} ));
}
export async function ThemeApiDeleteIn(params: any, body:number[]){
    return baseApi(await axios.delete(`${apiUrl}/theme/delete_in`, {data: body} ));
}