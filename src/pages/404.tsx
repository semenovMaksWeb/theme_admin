import React, {useEffect} from "react";
import {useActions} from "../hook/use-actions";

import {TypeApi, TypeApiMethods} from "../interface/type/typeApi";

import {apiUrl, generatorUrlApi} from "../api/generatorUrlApi";

export function Page_404(){
    const { CreateScreen} = useActions();
    useEffect(()=>{
        const config:TypeApi = {
            url: `${apiUrl}/theme/delete`,
            type: TypeApiMethods.delete
        }
        generatorUrlApi(config, {}, {});
    }, []);
        return(
            <>
                <div>404</div>
            </>
        )
    }
export default Page_404;