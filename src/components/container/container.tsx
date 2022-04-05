import React, {useMemo} from "react";
import {useTypeSelector} from "../../hook/use-typed-selector";
import {slot} from "../slot/slot";
import "./container.css"

export function Container(props:any){
    const  components = useTypeSelector(state => state.components.components);
    const container:any = components[props.id];
    const screen = useMemo(()=>{
        const children:any = {};
        for (const e of container.children) {
            children[e.id] = components[e.id];
        }
        const {screen} =  slot(children, true);
        return screen
    }, [container.children])

    return(
        <div className="container container__default components">
            {screen}
        </div>
    )
}