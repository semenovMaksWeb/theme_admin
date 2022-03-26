import {ComponentsAction, ComponentsReducers, ComponentsState, ComponentsTypes} from "../type/components";

export const ComponentsReducer = (state = ComponentsState, action: ComponentsAction): ComponentsReducers => {
    switch (action.type) {
        case ComponentsTypes.CREATE_COMPONENTS:
            return { ...state, components:action.payload.components}
        case ComponentsTypes.CREATE_COMPONENT:
            return { ...state, components: {...state.components,[action.payload.id]:action.payload.components } }
        case ComponentsTypes.RESET_COMPONENT:
            return { components: {} }
        case  ComponentsTypes.CREATE_DATA_COMPONENT:
            return  {
                ...state,
                components: {
                    ...state.components,
                        [action.payload.id]: {
                        ...state.components[action.payload.id],
                            data:action.payload.data
                    }
                }
            }
        case ComponentsTypes.UPDATE_VALUES_FORM:
            return  {
                ...state,
                components: {
                    ...state.components,
                    [action.payload.id]:{
                        ...state.components[action.payload.id],
                        values:{
                            ...state.components[action.payload.id].values,
                            [action.payload.key]: action.payload.value,
                        }
                    }
                }
            }
        case ComponentsTypes.RESET_VALUES_FORM:
            return  {
                ...state,
                components: {
                    ...state.components,
                    [action.payload.id]:{
                        ...state.components[action.payload.id],
                        values: action.payload.values,
                    }
                }
            }
        default:
            return state
    }
}