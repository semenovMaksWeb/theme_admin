import {combineReducers} from "redux";
import {ComponentsReducer} from "./components";
import {AlertReducer} from "./alert";
import {BreadcrumbsReducer} from "./breadcrumbs";
 
// import {authReducer } from "store/reducers/AuthReducer";
//
export const rootReducer = combineReducers({
    components: ComponentsReducer,
    alert: AlertReducer,
    breadcrumbs: BreadcrumbsReducer,
})

export type RootState = ReturnType<typeof rootReducer>