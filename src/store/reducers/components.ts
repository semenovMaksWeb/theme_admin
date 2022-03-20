import {ComponentsAction, ComponentsReducers, ComponentsState, ComponentsTypes} from "../type/components";

export const ComponentsReducer = (state = ComponentsState, action: ComponentsAction): ComponentsReducers => {
    switch (action.type) {
        case ComponentsTypes.CREATE_COMPONENT:
            return { ...state, components: {...state.components,[action.payload.id]:action.payload.components } }
        case ComponentsTypes.RESET_COMPONENT:
            return { components: {} }
        default:
            return state
    }
}