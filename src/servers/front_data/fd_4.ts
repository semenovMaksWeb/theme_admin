import {FrontData} from "../../interface/config/configFrontData";



/**
 * @function fd_4
 * функция получение контента с url которая имеет params
 * пример /screen/1?data=1&dataset=2
 */
export function fd_4(config:FrontData){
    const search = window.location.search;
    const query = new URLSearchParams(search);
    return query.get(config.name)
}