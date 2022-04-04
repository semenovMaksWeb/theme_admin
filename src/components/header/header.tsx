import React from "react";
import {Breadcrumbs} from "./breadcrumbs/breadcrumbs";
import  "./header.css"
export function Header(){
    return(
        <header className="header">
            <Breadcrumbs />
        </header>
    )
}