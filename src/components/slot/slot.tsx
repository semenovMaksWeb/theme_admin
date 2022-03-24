import React from "react";
import {TypeComponents} from "../../interface/typeComponents";
import {Table} from "../table/table";
import {Button} from "../button/button";

export function slot(configScreen:any){
    const screen = [];
    for (const key in configScreen) {
        const elem = configScreen[key];
        if (elem.type === TypeComponents.table){
            screen.push(<Table key={elem.id} id={elem.id}/>)
        }else
        if (elem.type === TypeComponents.button){
            screen.push(<Button key={elem.id} id={elem.id}/>)
        }
    }
    return {screen};
}