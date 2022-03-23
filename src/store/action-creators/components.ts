import {Dispatch} from "redux";
import {ComponentsAction, ComponentsTypes} from "../type/components";
import {config_component} from "../../api/config/config_component";
export function CreateComponents(id:number){
    return (dispatch: Dispatch<ComponentsAction>) => {
        const components:any = config_component[id];
        dispatch({
            type: ComponentsTypes.CREATE_COMPONENT,
            payload:  {id: id, components: components}
        })
    }
}