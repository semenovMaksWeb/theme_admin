export function convert_object_in_str_query(object:any){
    let str_query = "";
    for (const key in object) {
        if (str_query !== ""){
            str_query += "&";
        }
        let elem = object[key];
        str_query += `${key}=${elem}`
    }
    return str_query;
}