const url_image =  "https://localhost:7087/images/";
const url_svg =  "https://localhost:7087/svg/";
export function images(url:string){
    return `${url_image}/${url}`
}
export function svg(url:string){
    return `${url_svg}/${url}`
}