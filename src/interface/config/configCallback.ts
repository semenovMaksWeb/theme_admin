export interface ConfigCallback{
    name: CallbackName;
    params: {key:string};
}

export enum CallbackName{
    api="api"
}