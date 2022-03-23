export enum ComponentsTypes {
    CREATE_COMPONENT="CREATE_COMPONENT",
    RESET_COMPONENT="RESET_COMPONENT",
    CREATE_DATA_COMPONENT="CREATE_DATA"
}

export interface CreateDataComponents{
    type: ComponentsTypes.CREATE_DATA_COMPONENT,
    payload: {
        data: any,
        id: number,
    },
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



export type ComponentsAction = CreateComponent | ResetComponents | CreateDataComponents;

export interface ComponentsReducers {
    components: any
}
export const ComponentsState: ComponentsReducers = {
    components: {}
}