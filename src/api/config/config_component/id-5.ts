 export const id_5 = {
     id:5,
     style:{
         order: 2,
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
                         url:"theme/delete_in",
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