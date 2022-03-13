import {ThemeApiGetAll, ThemeApiGetId} from "./theme/theme-api";

export const apiUrl = "https://localhost:7087";

export const indexApi = {
    "theme/get_all": ThemeApiGetAll,
    "theme/get_id": ThemeApiGetId,
};