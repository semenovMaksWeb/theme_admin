import {TypeApiMethods} from "../../../interface/type/typeApi";

export const id_17 = {
    id: 17,
    type_table: "client",
    class:{
        hidden_text_overflow: true,
    },
    style:{
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
      type: "scroll",
    },
    screen_visible:true,
    type: "table",
    key_main: 'id',
    name: "Темы проектов",
    api_url:{
        errors:{
            callback:[{
                name: "router_push",
                params:{
                    url: "/screen/1",
                    config:{}
                }
            }]
        },
        url: "var_css_name_theme/theme_id", type: TypeApiMethods.get, config: {
            id: {
               result: "params",
               type: 4,
               name: 'id_theme',
               var_type: 'number',
            }
        } 
    },
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
            title: "название переменной",
            type: "td",
            sort:true,
        },
        value: {
            w: 120,
            key: "value",
            title: "значение переменной",
            type: "td",
            sort:true,
        }
    }
}