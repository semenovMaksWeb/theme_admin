 export const id_7 = {
     id:7,
     screen_visible:false,
     style:{
         border: "1px solid #000",
         border_radius: "4px",
         margin: "0 auto",
     },
     type: "button",
     text: "редактировать",
     title: "редактировать тему",
      event:{
          click:[
              {
                  name: "router_push",
                  params:{
                      url: "/screen/2",
                      config:{
                          id_theme: {
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