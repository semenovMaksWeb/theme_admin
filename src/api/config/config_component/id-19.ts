import {TypeApiMethods} from "../../../interface/type/typeApi";

export const id_19 = {
     id:19,
     style:{
        // color: "red",
        //  bg: "transparent",
        //  border: "1px solid red",
        //  border_radius: "4px",
         margin: "0 auto",
         height: "100%"
     },
     screen_visible:false,
     type: "button",
     // text: "удалить",
    icons: {
      type: "svg",
      url: "editor.svg"
    },
     title: "редактировать переменные темы",
    event:{
        click:[
            {
                name: "router_push",
                params:{
                    url: "/screen/5",
                    config:{
                        id_theme: {
                            result: "all",
                            type:1,
                            name: 'id'
                        }
                    }
                }
            }
        ]
    }
}