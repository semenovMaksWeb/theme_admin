
export enum BreadcrumbsType{
    CREATE_BREADCRUMBS="CREATE_BREADCRUMBS",
}
export interface BreadcrumbsReducers {
    breadcrumbs: any
}
export const BreadcrumbsState: BreadcrumbsReducers = {
    breadcrumbs: []
}

export interface CreateBreadcrumbs{
    type: BreadcrumbsType.CREATE_BREADCRUMBS,
    payload: {
        breadcrumbs: BreadcrumbsReducers,
    },
}

export type BreadcrumbsAction = CreateBreadcrumbs;