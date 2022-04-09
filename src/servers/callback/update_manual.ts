import {ConfigCallback} from "../../interface/config/configCallback";
import  {store} from "../../store";
import {frontData} from "../front_data";
import {generatorUrlApi} from "../../api/generatorUrlApi";
import {dataSaveSelect} from "../../components/form/components/select/lib/data-loader";
/**
 * @function router_push
 * функция калбек
 * отправляет запрос на api и обновляет store у компонента select
 */
export async function update_manual(config:ConfigCallback){
    const {body, params } = frontData(config.params.config, {});
    const response = await generatorUrlApi(config.params.url, params, body);
    dataSaveSelect(config.params.schema, response, config.params.id_form, config.params.id_select);

}