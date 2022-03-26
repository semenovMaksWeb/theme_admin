import React, {useEffect} from "react";
import {useActions} from "../hook/use-actions";
import {useTypeSelector} from "../hook/use-typed-selector";
import {slot} from "../components/slot/slot";

export function Page_404(){
    const { DataSaveTable, CreateScreen} = useActions();
    useEffect(()=>{
        CreateScreen(1);
        DataSaveTable(1);
    }, []);
    const  components = useTypeSelector(state => state.components.components);
    const  state = useTypeSelector(state => state);
    const {screen} = slot(components);
    if (components[1]?.data){
        return(
            <>
                <div>404</div>
                {screen}
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