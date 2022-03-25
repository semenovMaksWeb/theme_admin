import {ThemeApiDeleteId, ThemeApiGetAll, ThemeApiGetId, ThemeApiSave} from "./theme/theme-api";

export const apiUrl = "https://localhost:7087";

export const indexApi:any = {
    "theme/get_all": ThemeApiGetAll,
    "theme/get_id": ThemeApiGetId,
    "theme/delete_id": ThemeApiDeleteId,
    "theme/save": ThemeApiSave,
};