import React, {useEffect} from "react";
import {useActions} from "../hook/use-actions";
import {useTypeSelector} from "../hook/use-typed-selector";
import {slot} from "../components/slot/slot";
import {TypeApi, TypeApiMethods} from "../interface/type/typeApi";
import {apiUrl} from "../api/index-api";
import {generatorUrlApi} from "../api/generatorUrlApi";

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