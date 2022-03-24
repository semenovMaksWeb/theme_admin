import React from "react";
import {TypeComponents} from "../../interface/typeComponents";
import {Table} from "../table/table";
import {Button} from "../button/button";
import {Container} from "../container/container";

export function slot(configScreen:any, check_screen_visible = false){
    const screen = [];
    for (const key in configScreen) {
        const elem = configScreen[key];
        if (!elem.screen_visible && !check_screen_visible){
            continue;
        }
        if (elem.type === TypeComponents.table){
            screen.push(<Table key={elem.id} id={elem.id}/>)
        }else
        if (elem.type === TypeComponents.button){
            screen.push(<Button key={elem.id} id={elem.id}/>)
        }
        if (elem.type ===TypeComponents.container){
            screen.push(<Container key={elem.id} id={elem.id}/>)
        }
        if (elem.children){
            console.log("тут логика если есть потомки")
        }
    }
    return {screen};
}