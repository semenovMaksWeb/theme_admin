import { TypeApiMethods } from "interface/type/typeApi";

export const id_18 = {
    id:18,
    style:{
        order: 2
      },
      type: "form",
      screen_visible:false,
      values:{
        id: 0,
        rows_var_theme:[],
      },
      errors:{},
      manual: {},
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
                    id: "create_container",
                    order: 1,
                    type: "container",
                    style:{
                      display: "flex",
                      "align-items": "flex-end",
                    },
                    children:[
                        {
                            api_data: {
                                url:{
                                    url: "var_css_name_theme/get_insert", type: TypeApiMethods.get,
                                },
                                config:{
                                    id: {
                                        result: "params",
                                        type:4,
                                        name: 'id_theme',
                                        var_type: 'number',
                                    },
                                },
                            },
                            order: 1,
                            id: "id",
                            schema: {
                                id: "id",
                                name: 'name'
                            },
                            loader_start: false,
                            type: "select",
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
                                height: "20px",
                                margin: "0 0 0 10px"
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
                                    },
                                    {
                                        name: "update_manual",
                                        params: {
                                            id_form: 18,
                                            id_select: "id",
                                            schema: {
                                                id: "id",
                                                name: 'name'
                                            },
                                            url:{
                                                url: "var_css_name_theme/get_insert", type: TypeApiMethods.get,
                                            },
                                            config:{
                                                id: {
                                                    result: "params",
                                                    type:4,
                                                    name: 'id_theme',
                                                    var_type: 'number',
                                                },
                                            },
                                        }
                                    },
                                    {
                                        name: "reset_value_form_key",
                                        params:{
                                            id: 18,
                                            key: "id",
                                        }
                                    }
                                ]
                            }
                        },
                    ]
                },
                {
                    api_data: {
                        config: {
                            id: {
                                result: "params",
                                type: 4,
                                name: 'id_theme',
                                var_type: 'number',
                            }
                        },
                        url:{  url: "var_css_name_theme/theme_id", type: TypeApiMethods.get,
                            errors:{
                                callback:[{
                                    name: "router_push",
                                    params:{
                                        url: "/screen/1",
                                        config:{}
                                    }
                                }]
                            }, },
                    },
                    id: "rows_var_theme",
                    order: 2,
                    type: "rows",
                    children: [
                        {
                         style:{
                             display: "flex"
                         },
                         id: 'container_var_theme',
                         type: "container",
                          order:1,
                          children:[
                              {
                                  order: 1,
                                  id_parent: 'rows_var_theme',
                                  id: "id",
                                  type: "input",
                                  label: {
                                      text: "Id переменной"
                                  }
                              },
                              {
                                  order: 2,
                                  id_parent: 'rows_var_theme',
                                  id: "name",
                                  type: "input",
                                  label: {
                                      text: "Название переменной"
                                  }
                              },
                              {
                                  order: 3,
                                  id_parent: 'rows_var_theme',
                                  id: "value",
                                  type: "input",
                                  label: {
                                      text: "Значение переменной"
                                  }
                              },
                          ]
                        },

                    ]
                },
            ]
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
                                data: {
                                    result: "body",
                                    type: 2,
                                    id: 18,
                                    name: 'rows_var_theme',
                                },
                            }
                        }
                    }
                ]
            }
       }
     ]
};