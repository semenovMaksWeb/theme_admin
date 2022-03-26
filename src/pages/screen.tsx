import React, {useEffect} from "react";
import {useActions} from "../hook/use-actions";
import {useTypeSelector} from "../hook/use-typed-selector";
import {slot} from "../components/slot/slot";
import { useParams } from 'react-router';


export function Page_screen(){
    const { CreateScreen} = useActions();
    const params:any = useParams();
    useEffect(()=>{
        CreateScreen(+params.id);
    }, []);
    const  components = useTypeSelector(state => state.components.components);
    const {screen} = slot(components);
    return(
    <>
        {screen}
    </>
)
}
export default Page_screen;