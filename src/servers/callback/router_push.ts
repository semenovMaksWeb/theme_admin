import {ConfigCallback} from "../../interface/config/configCallback";
import {frontData} from "../front_data";
import {convert_object_in_str_query} from "../libs/convert_object_in_str_query";





export function router_push(config:ConfigCallback, content:any, history:any){
    console.log(config, content);
    const {all} = frontData(config.params.config, content);
    let str_query = convert_object_in_str_query(all);
    history.push({pathname:config.params.url,search:str_query})
}