import {ComponentsAction, ComponentsReducers, ComponentsState, ComponentsTypes} from "../type/components";

export const ComponentsReducer = (state = ComponentsState, action: ComponentsAction): ComponentsReducers => {
    switch (action.type) {
        // добавить скрин компонентов
        case ComponentsTypes.CREATE_COMPONENTS:
            return { ...state, components:action.payload.components}
        // добавить компонент
        case ComponentsTypes.CREATE_COMPONENT:
            return { ...state, components: {...state.components,[action.payload.id]:action.payload.components } }
        // сбросить компоненты
        case ComponentsTypes.RESET_COMPONENT:
            return { components: {} }
        // заполнить данные
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
        // изменить данные в форме
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
        // заполнить данные checkbox
        case  ComponentsTypes.CREATE_CHECKBOX_COMPONENT:
            return {
                ...state,
                components: {
                    ...state.components,
                    [action.payload.id]:{
                        ...state.components[action.payload.id],
                         checkbox_data: action.payload.data
                    }
                }
            }
        // изменить данные в форме
        case ComponentsTypes.SAVE_VALUES_FORM:
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
        case ComponentsTypes.SAVE_ERRORS_FORM:
            return  {
                ...state,
                components: {
                    ...state.components,
                    [action.payload.id]:{
                        ...state.components[action.payload.id],
                        errors: action.payload.errors,
                    }
                }
            }
        case ComponentsTypes.SAVE_MANUAL_FORM:
            return  {
                ...state,
                components: {
                    ...state.components,
                    [action.payload.id]:{
                        ...state.components[action.payload.id],
                        manual:{
                            ...state.components[action.payload.id].manual,
                            [action.payload.id_manual]: action.payload.data
                        }
                    }
                }
            }

            // изменить sort_rule
        case ComponentsTypes.UPDATE_SORT_RULE:
            return {
                ...state,
                components:{
                    ...state.components,
                    [action.payload.id]:{
                        ...state.components[action.payload.id],
                        sort_rule: action.payload.data
                    }
                }
            }
        //    сохранить пагинацию
        case ComponentsTypes.PAGINATOR_SAVE:
            return {
                ...state,
                components:{
                    ...state.components,
                    [action.payload.id]:{
                        ...state.components[action.payload.id],
                        paginator: action.payload.data
                    }
                }
            }
        case ComponentsTypes.RESET_KEY_ERRORS_FORM:
            return {
                ...state,
                components:{
                    ...state.components,
                    [action.payload.id]:{
                        ...state.components[action.payload.id],
                        errors: {
                            ...state.components[action.payload.id].errors,
                            [action.payload.key]: null,
                        }
                    }
                }
            }
        default:
                return state
    }
}