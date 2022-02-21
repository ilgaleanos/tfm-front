import { Axios } from "../../servicios/red.service";
import { LoggerService } from "../../servicios/logger.service"
import { StorageService } from "../../servicios/storage.service";




const logger = new LoggerService('Modelos');
const storeService = new StorageService();

/**
 * Permisos del usuario
 * @returns 
 */
const obtenerPermisos = () => {
    return storeService.getPermisos()
}


/**
 * 
 * @param {*} event 
 * @param {*} hook 
 */
const fijarCampo = (event, form, setForm) => {
    let campo = event.target.id;
    form[campo] = event.target.value;
    setForm({ ...form });
}


const consultarModelos = (event, form, setRegresion, setRed, setCargando) => {
    event.preventDefault();
    setCargando(true);

    Axios.post('/v1/evaluar/red', form)
        .then((resp) => {
            setCargando(false);
            setRed(resp.data?.valor)
            logger.debug('consultarModelos:red', resp.data)
        })
        .catch((err) => {
            setCargando(false);
            logger.error('consultarModelos:red', err)
        })

    Axios.post('/v1/evaluar/regresion', form)
        .then((resp) => {
            setCargando(false);
            setRegresion(resp.data?.valor)
            logger.debug('consultarModelos:regresion', resp.data)
        })
        .catch((err) => {
            setCargando(false);
            logger.error('consultarModelos:regresion', err)
        })
}


/**
 * Exportaciones
 */
export {
    obtenerPermisos,
    fijarCampo,
    consultarModelos
}