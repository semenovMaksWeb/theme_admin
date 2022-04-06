import { TypeApiMethods } from "interface/type/typeApi";

export const id_18 = {
    id:18,
    style:{
        order: 2
      },
      type: "form",
      screen_visible:true,
      values:{
        id: 0,
        name:"",
        value:"",
      },
      errors:{},
      schema:[
          {
            order: 1,
            type: "fieldset",
            id:"main_fieldset",
            legend:{
                 text: "Работа с изменениями переменных в темах",
            }, 
            children:[
                {
                    order: 1,
                    id: "id",
                    type: "input",
                    label: {
                         text: "Новая переменная"
                    }
               },
               {
                order: 2,
                key: "create",
                id: 'create',
                type: "button",
                text: "создать",
                style:{
                     border: "1px solid #000",
                     border_radius: "4px",
                },
                event:{
                    click:[
                        {
                            name: "api",
                            params:{
                                url:{ url: "var_css_name_theme/save", type: TypeApiMethods.post},
                                config:{
                                    id_var: {
                                        result: "body",
                                        type:2,
                                        id:18,
                                        name: 'id',
                                        val_type: "number",
                                   },
                                   id_theme: {
                                        result: "body",
                                        type: 4,
                                        name: 'id_theme',
                                        var_type: 'number',
                                    }
                                }
                            }
                        }
                    ]
                }
           },
                {
                    order: 3,
                    id: "name",
                    type: "input",
                    label: {
                         text: "Название переменной"
                    }
               },
               {
                order: 4,
                id: "value",
                type: "input",
                label: {
                     text: "Значение переменной"
                }
           },

           {
            order: 5,
            key: "button_update",
            id: 'update',
            type: "button",
            text: "сохранить изменения",
            style:{
                 border: "1px solid #000",
                 border_radius: "4px",
            },
            event:{
                click:[
                    {
                        name: "api",
                        params:{
                            url:{ url: "var_css_name_theme/update_all", type: TypeApiMethods.put},
                            config:{
                                id: {
                                    result: "body",
                                    type:2,
                                    id:18,
                                    name: 'name',
                                    var_type: "number",
                               },
                               value: {
                                    result: "body",
                                    type: 2,
                                    id:18,
                                    name: 'value',
                                }
                            }
                        }
                    }
                ]
            }
       },

            ] 
          }
      ]

}