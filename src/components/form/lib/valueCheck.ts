export function formValueCheck(props:any, form:any) {
    if (props.elem.id_parent && props.index !== undefined){
        return form.values[props.elem.id_parent][props.index][props.elem.id] !== undefined ?
            form.values[props.elem.id_parent][props.index][props.elem.id] : ""
    }
    return form.values[props.elem.id] !== undefined  ? form.values[props.elem.id]  : ""
}