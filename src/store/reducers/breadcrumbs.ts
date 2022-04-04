import  {BreadcrumbsAction, BreadcrumbsReducers, BreadcrumbsState, BreadcrumbsType} from "../type/breadcrumbs"
export const BreadcrumbsReducer = (state = BreadcrumbsState, action:BreadcrumbsAction ):BreadcrumbsReducers =>{
    switch (action.type) {
        case BreadcrumbsType.CREATE_BREADCRUMBS:
            return {
                ...state,
                breadcrumbs: action.payload.breadcrumbs
            }
        default:
            return state
    }
}