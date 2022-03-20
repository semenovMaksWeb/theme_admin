import {indexApi} from "../../index-api";

export const id_1 = {
    id: 1,
    name: "Темы проектов",
    api_url: indexApi["theme/get_all"],
    schema:{
        id:{
            key: "id",
            title: "id",
            type: "td",
        },
        name: {
            key: "name",
            title: "название темы",
            type: "td",
        },
        description: {
            key: "description",
            title: "описание темы",
            type: "td",
        }
    }
}