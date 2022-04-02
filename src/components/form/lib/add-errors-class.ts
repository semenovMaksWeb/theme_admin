export function addErrorsClass(form: any,elem:any){
    return !!form.errors[elem.id];

}