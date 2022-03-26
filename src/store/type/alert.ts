import {Alert} from "../../interface/alert";

export enum AlertTypes {
    CREATE_ALERT="CREATE_ALERT",
    DELETE_ALERT="DELETE_ALERT"
}

export interface CreateAlert {
    type: AlertTypes.CREATE_ALERT,
    payload: {
        data: Alert,
    }
}
export interface DeleteAlert {
    type: AlertTypes.DELETE_ALERT,
    payload: {
        index: number,
    }
}

export interface AlertReducers {
    alert: Alert[]
}

export const AlertState: AlertReducers  = {
    alert: [],
}

export type AlertAction = CreateAlert | DeleteAlert;
