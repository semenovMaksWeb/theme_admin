export interface ConfigCallback{
    name: CallbackName;
    params:{
        [key: string]: any;
    }

}

export enum CallbackName{
    api="api"
}