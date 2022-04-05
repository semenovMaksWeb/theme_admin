import {TypeApiMethods} from "../../../interface/type/typeApi";

export const id_1 = {
    id: 1,
    type_table: "client",
    class:{
        hidden_text_overflow: true,
    },
    style:{
        width: "700px",
        max_height: "300px",
        order: 1,
        margin: "0px 0px 10px 0px",
        header:{
            text_align: 'center',
        },
        body:{
            color: 'green',
            text_align: 'center',
            height_row: "20px",
        },
    },
    paginator:{
      type: "page",
      page: 1,
      limit:5,
      arrows_pagination: true,
    },
    checkbox_data:[],
    checkbox_td: true,
    screen_visible:false,
    type: "table",
    key_main: 'id',
    name: "Темы проектов",
    api_url:{ url: "theme/get_all", type: TypeApiMethods.get, config: {} },
    schema:{
        id:{
            sort:true,
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
            sort:true,
        },
        description: {
            w: 120,
            key: "description",
            title: "описание темы",
            type: "td",
            sort:true,
        },
        delete:{
            w:40,
            key: "delete",
            title: "",
            type: "button",
            button:2,
        },
        update:{
            w:40,
            key: "update",
            title: "",
            type: "button",
            button:7,
        }
    }
}