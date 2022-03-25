export const id_4 = {
     id:4,
     type: "form",
     screen_visible:true,
     name: "",
     values:{
          name_theme: "",
          description_theme: "",
     },
     schema:[
          {
               order: 1,
               type: "fieldset",
               id:"main_fieldset",
               legend:{
                    text: "Создать тему",
               },
               children:[
                    {
                         order: 1,
                         id: "name_theme",
                         val_type: "string",
                         type: "input",
                         label: {
                              text: "Название темы"
                         }
                    },
                    {
                         order: 2,
                         id: "description_theme",
                         val_type: "string",
                         type: "input",
                         label:{
                              text: "Описание темы"
                         }
                    },
                    {
                         id: 'save',
                         order: 3,
                         key: "button_save",
                         type: "button",
                         text: "сохранить",
                         event:{
                              click:[
                                   {
                                        name: "api",
                                        params:{
                                             url:"theme/save",
                                             config:{
                                                  name: {
                                                       result: "body",
                                                       type:2,
                                                       id:4,
                                                       name: 'name_theme'
                                                  },
                                                  description: {
                                                       result: "body",
                                                       type:2,
                                                       id:4,
                                                       name: 'description_theme'
                                                  }
                                             }
                                        }
                                   },
                                   {
                                        name: "api",
                                        params:{
                                             url:"theme/get_id",
                                             config: {
                                                  id: {
                                                       result: "params",
                                                       type:1,
                                                       index: 0,
                                                       name: 'id'
                                                  },
                                             }
                                        }
                                   }
                              ]
                         }
                    }
               ]
          }
     ]
}