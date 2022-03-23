 export const id_1 = {
    id: 1,
    name: "Темы проектов",
    api_url: "theme/get_all",
    schema:{
        id:{
            w: 40,
            key: "id",
            title: "id",
            type: "td",
        },
        name: {
            w: 120,
            key: "name",
            title: "название темы",
            type: "td",
        },
        description: {
            w: 120,
            key: "description",
            title: "описание темы",
            type: "td",
        },
        delete:{
            w:80,
            key: "delete",
            title: "удалить",
            type: "button",
            button:2,
        }
    }
}