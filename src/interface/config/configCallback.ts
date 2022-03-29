export interface ConfigCallback{
    name: CallbackName;
    params:{
        [key: string]: any;
    }

}

export enum CallbackName{
    api="api",
    delete_table_row="delete_table_row",
    reset_values_form="reset_values_form",
    add_table_row="add_table_row",
    router_push="router_push",
}