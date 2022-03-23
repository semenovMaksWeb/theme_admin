import React, {useEffect, useState} from "react";
import {useActions} from "../hook/use-actions";
import {useTypeSelector} from "../hook/use-typed-selector";
import {Table} from "../components/table/table";

export function Page_404(){
    const {CreateComponents, DataSaveTable} = useActions();
    useEffect(()=>{
        console.log('куку!')
        CreateComponents(1);
        CreateComponents(2);
        DataSaveTable(1);
    }, []);
    const  components = useTypeSelector(state => state.components.components);
    console.log(components)
    if (components[1]?.data){
        return(
            <>
                <div>404</div>
                <Table id={1}/>
            </>
        )
    }
    return  (
        <>
            <div>404</div>
        </>
    )

}
export default Page_404;