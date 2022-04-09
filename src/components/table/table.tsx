import React, {useEffect, useMemo} from "react";
import "./styles/table.css"
import {useTypeSelector} from "../../hook/use-typed-selector";
import {useActions} from "../../hook/use-actions";
import {componentsStyle} from "../../servers/css/components_style";
import {Paginator} from "./paginator/paginator";
import {PaginatorType} from "../../interface/table-data/PaginatorConfig";
import {Body} from "./body/body";
import {Header} from "./header/header";
import {useHistory} from "react-router";

export function Table(props:any){
    const  {CreateCheckboxData, DataSaveTable}= useActions();
    const history = useHistory();
    const  components = useTypeSelector(state => state.components.components);
    const table:any = components[props.id];

    useEffect(()=>{
        if (table){
            DataSaveTable(table.id, history);
        }
    }, [table.id]);
    useEffect(()=>{
        if (table && table.data) {
            CreateCheckboxData(table.id);
        }
    }, [table.data]);

    const {paginator} = useMemo(()=>{
        let paginator = <></>;
        if (table?.paginator?.type === PaginatorType.page){
            paginator = <Paginator id={props.id} />
        }
        return {paginator}
    }, [table.paginator.type]);

    if (!table){
        return  (<><div>Таблица не иницилизирована!</div> </>)
    }
    const {components_style} = componentsStyle(table);

    return(
        <>
            <div className="table__wrapper">
                <div className="table__name"> {table.name} </div>
                <div className="table components" data-id={table.id} style={components_style} >

                    <Header id={props.id}  />
                    <Body id={props.id}/>
                    <div className="paginator__table">
                        {paginator}
                    </div>

                </div>
            </div>
        </>
    )
}