import {TypeApiMethods} from "../../../interface/type/typeApi";

export const id_14 = {
     id:14,
     style:{
       order: 3,
     },
     type: "form",
     screen_visible:false,
     name: "",
     errors:{},
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
                    text: "Создать переменную темы",
               },
               children:[
                    {
                         order: 1,
                         id: "name",
                         val_type: "string",
                         type: "input",
                         label: {
                              text: "Название переменной"
                         }
                    },
                    {
                         order: 2,
                         id: "description",
                         val_type: "string",
                         type: "input",
                         label:{
                              text: "Описание переменной"
                         }
                    },
                    {
                         id: 'save',
                         style:{
                              border: "1px solid #000",
                              border_radius: "4px",
                         },
                         order: 3,
                         key: "button_save",
                         type: "button",
                         text: "сохранить",
                         event:{
                              click:[
                                   {
                                        name: "api",
                                        params:{
                                             errors: { id: 14 },
                                             url:{ url: "var_css_name/save", type: TypeApiMethods.post},
                                             config:{
                                                  name: {
                                                       result: "body",
                                                       type:2,
                                                       id:14,
                                                       name: 'name'
                                                  },
                                                  description: {
                                                       result: "body",
                                                       type:2,
                                                       id:14,
                                                       name: 'description'
                                                  }
                                             }
                                        }
                                   },
                                   {
                                        name: "reset_values_form",
                                        params: {
                                             id: 14
                                        }
                                   },
                                   {
                                        name: "api",
                                        params:{
                                             url:{ url: "var_css_name/get_id", type: TypeApiMethods.get},
                                             config: {
                                                  id: {
                                                       result: "params",
                                                       type:1,
                                                       index: 0,
                                                       name: 'id'
                                                  },
                                             }
                                        }
                                   },
                                   {
                                        name: "add_table_row",
                                        params: {
                                             config: {
                                                  data:{
                                                       result: "all",
                                                       type: 1,
                                                       index: 2,
                                                  }
                                             },
                                             id: 9,
                                        }
                                   }
                              ]
                         }
                    }
               ]
          }
     ]
}