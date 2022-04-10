## компонент форма
```
`id: уникальное значение`
`order` порядок в верстке
`name: название формы (заголовок)`
`screen_visible - нужно ли рисоваться в скрине верхнем уровне`
`api_data` - Объект имеющий ключи: url, config front_data и schema_value
    `schema_value схема подстановки данных в форму от бэка
        состоит из key_api и key_values
    ` 
schema - выводит компоненты внутри form
   order - порядок компонента
   type - тип компонента fieldset, legend,wrapper,input
   val_type - указывает тип переменной для этого поле type var js
   key - ключи для уникальности
   
   wrapper - прослойка для компонентов с label
   label - у некоторых компонентов есть такой ключ 
   {
        text  - текст label
   }
   
   legend - компонент для fieldset
    
   select - компонент select
   api_data - объект получение данных
   loader_start - получать данные сразу или при клики на select
    
   text - текст компонента
   children - потомки компонентов
   values - значение формы для обработки  
    key: {value}
 ```