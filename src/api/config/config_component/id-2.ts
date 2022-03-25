 export const id_2 = {
     id:2,
     screen_visible:false,
     type: "button",
     text: "удалить",
     title: "удалить тему",
      event:{
          click:[
               {
                    name: "api",
                    params:{
                         url:"theme/delete_id",
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
                      id:1,
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