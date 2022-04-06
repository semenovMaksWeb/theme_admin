 export const id_11 = {
     id:11,
     screen_visible:false,
     style:{
         // border: "1px solid #000",
         // border_radius: "4px",
         margin: "0 auto",
         // color: "#000",
         height: "100%"
     },
     type: "button",
     // text: "редактировать",/
     icons:{
         type:"svg",
         url: "editor.svg"
     },
     title: "редактировать переменную",
      event:{
          click:[
              {
                  name: "router_push",
                  params:{
                      url: "/screen/4",
                      config:{
                        id_var_css: {
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