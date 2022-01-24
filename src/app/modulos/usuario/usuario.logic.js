import { LoggerService } from "../../servicios/logger.service";
import { AxiosCache } from "../../servicios/red.service";
import { StorageService } from "../../servicios/storage.service";

const logger = new LoggerService('usuarios');
const storeSerice = new StorageService();


/**
 * Llamada al api para cargar usuarios
 * 
 * @param {*} setUsuario
 * @param {*} navegar
 */
const cargarUsuario = (id, setUsuario) => {
    setUsuario(storeSerice.getItem(`/v1/usuarios?id=${id}`).usuario || {})
    AxiosCache(`/v1/usuarios?id=${id}`)
        .then((resp) => {
            logger.debug('cargarUsuario', resp.data);
            setUsuario(resp.data.usuario);
        })
        .catch((err) => {
            logger.error(err);
        })
}

/**
 * Permisos del usuario
 * @returns 
 */
 const obtenerPermisos = () => {
    return storeSerice.getPermisos()
}

/**
 * Exportaciones
 */
export {
    cargarUsuario,
    obtenerPermisos
}