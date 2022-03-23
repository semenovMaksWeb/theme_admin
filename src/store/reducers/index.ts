import {combineReducers} from "redux";
import {ComponentsReducer} from "./components";
 
// import {authReducer } from "store/reducers/AuthReducer";
//
export const rootReducer = combineReducers({
    components: ComponentsReducer
})

export type RootState = ReturnType<typeof rootReducer>