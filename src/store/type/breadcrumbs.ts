
export enum BreadcrumbsType{
    CREATE_BREADCRUMBS="CREATE_BREADCRUMBS",
}
export interface BreadcrumbsReducers {
    breadcrumbs: Breadcrumbs[]
}
export interface Breadcrumbs{
    key:number;
    name: string;
    url?:string;

}

export const BreadcrumbsState: BreadcrumbsReducers = {
    breadcrumbs: []
}

export interface CreateBreadcrumbs{
    type: BreadcrumbsType.CREATE_BREADCRUMBS,
    payload: {
        breadcrumbs: Breadcrumbs[],
    },
}

export type BreadcrumbsAction = CreateBreadcrumbs;