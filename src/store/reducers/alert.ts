import {AlertAction, AlertState, AlertTypes} from "../type/alert"
export const  AlertReducer = (state = AlertState, action: AlertAction) =>{
    switch (action.type) {
        case AlertTypes.CREATE_ALERT:
            return {
                ...state,
                alert: [...state.alert, action.payload.data],
            }
        case AlertTypes.DELETE_ALERT:
            return {
                ...state,
                alert: [...state.alert.slice(0, action.payload.index), ...state.alert.slice(action.payload.index + 1)],
            }
        default:
            return state
    }
}