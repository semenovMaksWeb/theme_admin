import axios from "axios";
import {apiUrl} from "../index-api";
import {baseApi} from "../baseApi";

export async function ThemeApiGetAll(){
   return baseApi(await axios.get(`${apiUrl}/theme/get_all`));
}
export async function ThemeApiGetId(id:number){
    return baseApi(await axios.get(`${apiUrl}/theme/get_id?id=${id}`));
}