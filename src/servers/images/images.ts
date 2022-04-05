const url_image =  "https://localhost:7087/images";
const url_svg =  "https://localhost:7087/svg";

/**
 * @function images
 * функция прослойка для получение изображения с бэка
 */
export function images(url:string){
    return `${url_image}/${url}`
}

/**
 * @function svg
 * функция прослойка для получение svg c бэка
 */
export function svg(url:string){
    return `${url_svg}/${url}`
}