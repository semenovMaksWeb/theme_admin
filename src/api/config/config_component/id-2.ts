 export const id_2 = {
     id:2,
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
               }
          ]
      }
}