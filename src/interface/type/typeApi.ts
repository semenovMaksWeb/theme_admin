export interface TypeApi{
    url: string,
    type: TypeApiMethods,
    domain?: string,
}
export enum TypeApiMethods{
    get="get",
    post="post",
    delete="delete",
    put="put"
}