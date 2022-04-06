import {TypeApiMethods} from "../../../interface/type/typeApi";

export const id_15 = {
     id:15,
     style:{
       order: 5,
     },
     api_data: {
          url:{
               url: "var_css_name/get_id", type: TypeApiMethods.get,
               errors:{
                    callback:[{
                         name: "router_push",
                         params:{
                              url: "/screen/3",
                              config:{}
                         }
                    }]
               },
          },
          config:{
               id: {
                    result: "params",
                    type:4,
                    name: 'id_var_css',
                    var_type: 'number',
               },
          },

     },
     type: "form",
     screen_visible:false,
     name: "",
     errors: {},
     values:{
          name: "",
          description: "",
     },
     schema:[
          {
               order: 1,
               type: "fieldset",
               id:"main_fieldset",
               legend:{
                    text: "Изменить переменную темы",
               },
               children:[
                    {
                         order: 1,
                         id: "name",
                         val_type: "string",
                         type: "input",
                         label: {
                              text: "Название темы"
                         }
                    },
                    {
                         order: 2,
                         id: "description",
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
                         style:{
                              border: "1px solid #000",
                              border_radius: "4px",
                         },
                         event:{
                              click:[
                                   {
                                        name: "api",
                                        params:{
                                             errors: { id: 15 },
                                             url:{ url: "var_css_name/update_all", type: TypeApiMethods.put},
                                             config:{
                                                  name: {
                                                       result: "body",
                                                       type:2,
                                                       id:15,
                                                       name: 'name'
                                                  },
                                                  description: {
                                                       result: "body",
                                                       type:2,
                                                       id:15,
                                                       name: 'description'
                                                  },
                                                  id: {
                                                       result: "params",
                                                       type:4,
                                                       name: 'id_var_css',
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