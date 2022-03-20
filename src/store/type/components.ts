export enum ComponentsTypes {
    CREATE_COMPONENT="CREATE_COMPONENT",
    RESET_COMPONENT="RESET_COMPONENT",
}

export interface CreateComponent{
    type: ComponentsTypes.CREATE_COMPONENT,
    payload: {
        components: any,
        id: number,
    },
}
export interface ResetComponents{
    type: ComponentsTypes.RESET_COMPONENT,
}



export type ComponentsAction = CreateComponent | ResetComponents;

export interface ComponentsReducers {
    components: any
}
export const ComponentsState: ComponentsReducers = {
    components: {}
}