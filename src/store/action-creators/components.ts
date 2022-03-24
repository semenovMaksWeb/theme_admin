import {Dispatch} from "redux";
import {ComponentsAction, ComponentsTypes} from "../type/components";
import {config_component} from "../../api/config/config_component";
import {config_screen} from "../../api/config/config_screen";
export function CreateComponents(id:number){
    return (dispatch: Dispatch<ComponentsAction>) => {
        const components:any = config_component[id];
        dispatch({
            type: ComponentsTypes.CREATE_COMPONENT,
            payload:  {id: id, components: components}
        })
    }
}

export function CreateScreen(id:number){
    return (dispatch: Dispatch<ComponentsAction>) => {
        const components:any = config_screen[id];
        dispatch({
            type: ComponentsTypes.CREATE_COMPONENTS,
            payload:  {id: id, components: components}
        })
    }
}