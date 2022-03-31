export interface PaginatorConfig{
    limit: number,
    page: number,
    arrows_pagination:boolean,
    type: PaginatorType
}
export enum PaginatorType{
    scroll="scroll",
    page="page",
}