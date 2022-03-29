export interface SortConfig{
    key:string;
    order: number;
    type: SortTypeConfig;
}
export enum SortTypeConfig{
    desc="desc",
    asc="asc",
}
