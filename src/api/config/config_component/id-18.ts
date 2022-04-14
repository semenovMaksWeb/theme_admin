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
                      "align-items": "flex-start",
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
                            search:{
                                type: "frond-end"
                            },
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
                                            errors: { id: 18 },
                                            config:{
                                                id_var: {
                                                    result: "body",
                                                    type:2,
                                                    id:18,
                                                    name: 'id',
                                                    val_type: "number",
                                                    check_id: true,
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
                                      name: "add_rows_values_form",
                                       params:{
                                          id_form: 18,
                                          values_key: "rows_var_theme",
                                           url:{
                                               url: "var_css_name_theme/id", type: TypeApiMethods.get,
                                           },
                                           config:{
                                                id:{
                                                    result: "params",
                                                    type:1,
                                                    index:0,
                                                    name: 'id',
                                                    val_type: "number",
                                                }
                                           },
                                           // front_data: {
                                           //     data:{
                                           //         result: "all",
                                           //         type:2,
                                           //         id:18,
                                           //         name: 'id',
                                           //     }
                                           // },
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
                    style:{
                        overflow: "auto",
                        'max-height': "300px",
                        padding: "0 10px 0 0"
                    },
                    children: [
                        {
                         style:{
                             display: "flex"
                         },
                         id: 'container_var_theme',
                         type: "container",
                          order:1,
                          children:[
                              // {
                              //     disabled: true,
                              //     order: 1,
                              //     id_parent: 'rows_var_theme',
                              //     id: "id",
                              //     type: "input",
                              //     style_wrapper:{
                              //         margin: "0 10px 0 0"
                              //     },
                              //     label: {
                              //         text: "id переменной"
                              //     }
                              // },
                              {
                                  disabled: true,
                                  order: 1,
                                  id_parent: 'rows_var_theme',
                                  id: "name",
                                  type: "input",
                                  style_wrapper:{
                                        margin: "0 10px 0 0"
                                  },
                                  label: {
                                      text: "Название переменной"
                                  }
                              },
                              {
                                  order: 2,
                                  id_parent: 'rows_var_theme',
                                  id: "value",
                                  type: "input",
                                  label: {
                                      text: "Значение переменной"
                                  }
                              },
                              {
                                  order: 3,
                                  key: "delete",
                                  id: 'delete',
                                  type: "button",
                                  text: "удалить",
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
                                                  url:{ url: "var_css_name_theme/delete", type: TypeApiMethods.delete},
                                                  config:{
                                                      id: {
                                                          result: "params",
                                                          type:1,
                                                          id:18,
                                                          name: 'id',
                                                      },
                                                  }
                                              }
                                          },
                                          {
                                              name: "delete_rows_values_form",
                                              params:{
                                                  id_form: 18,
                                                  values_key: "rows_var_theme",
                                                  config: {
                                                      id: {
                                                          result: "all",
                                                          type:1,
                                                          id:18,
                                                          name: 'id',
                                                      },
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
                                      ]
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