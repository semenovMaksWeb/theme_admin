import {ValType} from "../type/valType";

export interface ConfigFrontData{
    [key:string]:FrontData
}

export interface FrontData{
    type: number,
    id?: number,
    name: string;
    result:ResultFrontData;
    index?: number;
    var_type: ValType
}
export enum ResultFrontData{
    body="body",
    params="params",
    all="all",
}