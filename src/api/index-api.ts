import {ThemeApiDeleteId, ThemeApiDeleteIn, ThemeApiGetAll, ThemeApiGetId, ThemeApiSave} from "./theme/theme-api";

export const apiUrl = "https://localhost:7087";

export const indexApi:any = {
    "theme/get_all": ThemeApiGetAll,
    "theme/get_id": ThemeApiGetId,
    "theme/delete_id": ThemeApiDeleteId,
    "theme/delete_in": ThemeApiDeleteIn,
    "theme/save": ThemeApiSave,
};