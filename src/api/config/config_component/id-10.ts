import {TypeApiMethods} from "../../../interface/type/typeApi";

export const id_10 = {
     id:10  ,
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
      url: "delete.svg"
    },
     title: "удалить переменную",
      event:{
          click:[
               {
                    name: "api",
                    params:{
                        url:{ url: "var_css_name/delete", type: TypeApiMethods.delete },
                        config:{
                             id: {
                                 result: "params",
                                  type:1,
                                  name: 'id'
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
                              type:1,
                              name: 'id'
                          }
                      }
                  }
              }
          ]
      }
}