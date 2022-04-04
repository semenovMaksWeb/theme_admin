import {ConfigCallback} from "../../interface/config/configCallback";
import {frontData} from "../front_data";
import {convert_object_in_str_query} from "../libs/convert_object_in_str_query";

/**
 * @function router_push
 * функция калбек
 * принимает react-router-dom history
 * push по другому url в проекте
 */
export function router_push(config:ConfigCallback, content:any, history:any){
    /**
     * #TODO  попробовать избавиться от history как параметр
     */
    const {all} = frontData(config.params.config, content);
    let str_query = convert_object_in_str_query(all);
    history.push({pathname:config.params.url,search:str_query})
}