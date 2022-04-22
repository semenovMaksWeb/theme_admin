import React, {useEffect, useMemo, useState} from "react";
import  "./select.css";
import {dataLoader} from "./lib/data-loader";
import {useTypeSelector} from "../../../../hook/use-typed-selector";
import {Option} from "./option/option";
import {useActions} from "../../../../hook/use-actions";
import {formValueCheck} from "../../lib/valueCheck";

export function Select(props:any) {
    const  components = useTypeSelector(state => state.components.components);
    const form:any = components[props.id_form];
    const {UpdateValuesForm} = useActions();
    /**
     * #TODO вынести visible в глобальное свойство
     */
    const [visible, visibleSave] = useState(false);
    useEffect( ()=>{
        (async ()=>{
            if(props.elem.loader_start){
            await dataLoader(props.elem, props.id_form);
            }
        })();
    },[props.elem]);
    const focusSelect = async ()=>{
        if (!form.manual[props.elem.id]){
            await dataLoader(props.elem, props.id_form);
        }
        visibleSave(true);
    };
    const [search, searchSave] = useState("");
    const arrayOption = useMemo(()=>{
        // поиск есть
        let arrayOption = [];
        let data = form.manual[props.elem.id];
        if (search !== ""){
            // поиск нужен на стороне фронта
            if (props?.elem?.search?.type === "frond-end"){
                data = form.manual[props.elem.id].filter((e:any)=> e.name.toLowerCase().includes(search.toLowerCase()));
            }
        }
        if (form.manual[props.elem.id]){
            for(const option of data){
                arrayOption.push(
                    <Option
                        key={option.id}
                        id={option.id}
                        name={option.name}
                        id_form={props.id_form}
                        elem={props.elem}
                    />
                    )
            }
        }
        return arrayOption;
    }, [form.manual[props.elem.id], search ]);
    const blurSelect = (e:any)=>{
        if (search){
            const newValue = form.manual[props.elem.id].filter((e:any)=> e.name === search)[0];
            if (newValue){
                UpdateValuesForm(props.id_form, props.elem.id, newValue);
            }else {
                UpdateValuesForm(props.id_form, props.elem.id, {id:0});
            }
        }
        searchSave("");
        visibleSave(false);
    };
    // изменить значение в input
    const updateData=(event:any)=>{
        // поиск нужно выполнять на стороне фронта!
        searchSave(event.target.value);
    };
    const value = useMemo(()=>{
        if (search !== ""){
            return  search;
        }
        const res = formValueCheck(props, form);
        if (res.name){
            return res.name;
        }
        return  "";
    }, [form.values[props.elem.id], search] );
    //
    return <>
        <div className="select">
            <input
                onFocus={focusSelect}
                onChange={updateData}
                onBlur={blurSelect}
                value={value}
                className="select__input"
            />
            {visible ?
                <div className="select__wrapper-option">
                    {arrayOption}
                </div>
            : <></>
            }
        </div>
    </>
}