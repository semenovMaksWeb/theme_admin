import {TypeApiMethods} from "../../../interface/type/typeApi";

export const id_5 = {
     id:5,
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
     title: "удалить выбранные темы",
      event:{
          click:[
               {
                    name: "api",
                    params:{
                        url:{ url: "theme/delete_in", type: TypeApiMethods.delete },
                         config:{
                             id: {
                                 result: "body",
                                  type:3,
                                  id:1,
                                  name: 'checkbox_data'
                             }
                         }
                    }
               },
              {
                  name: "delete_table_row",
                  params:{
                      id:1,
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