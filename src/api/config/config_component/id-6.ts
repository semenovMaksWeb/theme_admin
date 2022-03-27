export const id_6 = {
     id:6,
     style:{
       order: 5,
     },
     api_data: {
          url:"theme/get_id",
          config:{
               id: {
                    result: "params",
                    type:4,
                    name: 'id_theme',
                    var_type: 'number',
               },
          },
          schema_value:[
              {
                   key_api: "name",
                   key_values: "name_theme",
              },
              {
                    key_api: "description",
                    key_values: "description_theme",
              }

          ]
     },
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
                    text: "Изменить тему",
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
                         id: 'update',
                         order: 3,
                         key: "button_save",
                         type: "button",
                         text: "сохранить",
                         event:{
                              click:[
                                   {
                                        name: "api",
                                        params:{
                                             url:"theme/update_all",
                                             config:{
                                                  name: {
                                                       result: "body",
                                                       type:2,
                                                       id:6,
                                                       name: 'name_theme'
                                                  },
                                                  description: {
                                                       result: "body",
                                                       type:2,
                                                       id:6,
                                                       name: 'description_theme'
                                                  },
                                                  id: {
                                                       result: "params",
                                                       type:4,
                                                       name: 'id_theme',
                                                       var_type: 'number',
                                                  }
                                             }
                                        }
                                   },
                              ]
                         }
                    }
               ]
          }
     ]
}