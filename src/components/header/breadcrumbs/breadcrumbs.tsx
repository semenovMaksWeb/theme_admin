import React, {useMemo} from "react";
import {useTypeSelector} from "../../../hook/use-typed-selector";
import { Link } from "react-router-dom";
import "./breadcrumbs.css"

export function Breadcrumbs(){
    const  breadcrumbs = useTypeSelector(state => state.breadcrumbs.breadcrumbs);
    const breadcrumbs_html = useMemo(()=>{
        let res = [];
        if (breadcrumbs.length !== 0 ){
            for (const breadcrumb of breadcrumbs) {
                if (breadcrumb.url){
                    res.push(<Link className="breadcrumbs__elem breadcrumbs__link" to={breadcrumb.url} key={breadcrumb.key}>{breadcrumb.name}</Link>)
                }else {
                    res.push(<span className="breadcrumbs__elem breadcrumbs__span" key={breadcrumb.key}>{breadcrumb.name}</span>)
                }
            }
            return  res;
        }
        return  [];
    }, [breadcrumbs]);

    return(
        <>
            <div className="breadcrumbs__wrapper">{breadcrumbs_html}</div>
        </>
    )



}