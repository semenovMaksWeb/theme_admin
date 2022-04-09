import React, {useEffect, useMemo, useState} from "react";
import  "./select.css";
import {dataLoader} from "./lib/data-loader";
import {useTypeSelector} from "../../../../hook/use-typed-selector";
import {Option} from "./option/option";
import {useActions} from "../../../../hook/use-actions";

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
            await dataLoader(props.elem, props.id_form);
        })();
    },[props.elem]);
    const focusSelect = ()=>{
        visibleSave(true);
    };
    const arrayOption = useMemo(()=>{
        const arrayOption = [];
        if (form.manual[props.elem.id]){
            for(const option of form.manual[props.elem.id]){
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
    }, [form.manual[props.elem.id]]);
    const blurSelect = (e:any)=>{
        console.log(e);
        visibleSave(false);
    };
    const updateData=(event:any)=>{
        UpdateValuesForm(props.id_form, props.elem.id, event.target.value)
    };
    const value = useMemo(()=>{
        return form.values[props.elem.id] ? form.values[props.elem.id].name : ""
    }, [form.values[props.elem.id]]);
    // onBlur={blurSelect}
    return <>
        <div className="select">
            <input
                onFocus={focusSelect}
                onChange={updateData}
                value={value}
                className="select__input"
                title="Выберите переменую которую хотите добавить в тему"
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