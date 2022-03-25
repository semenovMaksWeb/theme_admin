export interface ConfigFrontData{
    [key:string]:FrontData
}

export interface FrontData{
    type: number,
    id: number,
    name: string;
    result:ResultFrontData;
    index: number;
}
export enum ResultFrontData{
    body="body",
    params="params",
    all="all",
}