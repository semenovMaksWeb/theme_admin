import {FrontData} from "../../interface/config/configFrontData";

export function fd_4(config:FrontData){
    const search = window.location.search;
    const query = new URLSearchParams(search);
    return query.get(config.name)
}