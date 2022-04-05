import {Dispatch} from "redux";
import {ComponentsAction, ComponentsTypes} from "../type/components";
import {config_component} from "../../api/config/config_component";
import {config_screen} from "../../api/config/config_screen";
import {BreadcrumbsAction, BreadcrumbsReducers, BreadcrumbsType} from "../type/breadcrumbs";

/**
 * @function CreateComponents
 * функция store
 * сохраняет компонент в store получая его по id
 */
export function CreateComponents(id:number){
    return (dispatch: Dispatch<ComponentsAction>) => {
        const components:any = config_component[id];
        dispatch({
            type: ComponentsTypes.CREATE_COMPONENT,
            payload:  {id: id, components: components}
        })
    }
}

/**
 * @function CreateScreen
 * функция store
 * сохраняет скрин в store получая его по id
 * сохраняет хлебные крошки если они есть ( в разработке)
 */
export function CreateScreen(id:number){
    return (dispatch: Dispatch<ComponentsAction | BreadcrumbsAction>) => {
        const components:any = config_screen[id];
        dispatch({
            type: ComponentsTypes.CREATE_COMPONENTS,
            payload:  {id: id, components: components.elements}
        })
        const breadcrumbs = components?.breadcrumbs ? components?.breadcrumbs : [];
            dispatch({
                type: BreadcrumbsType.CREATE_BREADCRUMBS,
                payload:  { breadcrumbs: breadcrumbs}
            })
    }
}