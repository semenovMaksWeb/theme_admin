import React, {useEffect} from "react";
import {useActions} from "../hook/use-actions";
import {useTypeSelector} from "../hook/use-typed-selector";
import {slot} from "../components/slot/slot";

export function Page_404(){
    const { CreateScreen} = useActions();
    useEffect(()=>{
        CreateScreen(1);
    }, []);
    const  components = useTypeSelector(state => state.components.components);
    const {screen} = slot(components);
        return(
            <>
                <div>404</div>
                {screen}
            </>
        )
    }
export default Page_404;