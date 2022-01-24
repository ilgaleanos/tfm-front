import { LoggerService } from "../../servicios/logger.service"
import { Axios } from "../../servicios/red.service"
import { StorageService } from "../../servicios/storage.service"


const logger = new LoggerService('usuario_eliminar')
const storeService = new StorageService();


/**
 * Permisos del usuario
 * @returns 
 */
const obtenerPermisos = () => {
    return storeService.getPermisos()
}


/**
 * Eliminamos al usuario y retornamos al listado
 * 
 * @param {*} event 
 * @param {*} usuario_id 
 * @param {*} navegar 
 */
const eliminarUsuario = (event, usuario_id, setCargando, navegar) => {
    event.preventDefault();
    setCargando(true);

    Axios.delete(`/v1/usuarios?id=${usuario_id}`)
        .then((resp) => {
            logger.debug('eliminarUsuario', resp.data);
            navegar('/usuarios');
        })
        .catch((err) => {
            logger.error(err)
            setCargando(false);
        })
}


export {
    obtenerPermisos,
    eliminarUsuario
}