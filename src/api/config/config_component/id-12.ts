import {TypeApiMethods} from "../../../interface/type/typeApi";

export const id_12 = {
     id:12,
     style:{
         order: 2,
             color: "red",
             bg: "transparent",
             border: "1px solid red",
             border_radius: "4px",
     },
     screen_visible:false,
     type: "button",
     text: "удалить",
     title: "удалить выбранные переменные",
      event:{
          click:[
               {
                    name: "api",
                    params:{
                        url:{ url: "var_css_name/delete_in", type: TypeApiMethods.delete },
                         config:{
                             ids: {
                                 result: "body",
                                  type:3,
                                  id:9,
                                  name: 'checkbox_data'
                             }
                         }
                    }
               },
              {
                  name: "delete_table_row",
                  params:{
                      id:9,
                      config:{
                          id: {
                              result: "all",
                              type:3,
                              id:1,
                              name: 'checkbox_data'
                          }
                      }
                  }
              }
          ]
      }
}