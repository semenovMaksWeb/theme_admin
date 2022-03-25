export interface ConfigCallback{
    name: CallbackName;
    params:{
        [key: string]: any;
    }

}

export enum CallbackName{
    api="api",
    delete_table_row="delete_table_row",
}