import { LoggerService } from "../../servicios/logger.service"
import { Axios, AxiosPermisos } from "../../servicios/red.service"
import { StorageService } from "../../servicios/storage.service";


const storageService = new StorageService();
const logger = new LoggerService('navbar');



/**
 * Permisos del usuario
 * @returns 
 */
const cambioRutaPermisos = (navegar, ruta) => {
    AxiosPermisos();
    navegar(ruta)
}


/**
 * Funcion que elimina todos los datos del cliente
 */
const logout = () => {
    Axios.delete('/v1/logout')
        .then((resp) => {
            storageService.clear();
            window.location = 'login';
        })
        .catch((err) => {
            logger.error('logout', err)
        })
}


/**
 * Exportaciones
 */
export {
    cambioRutaPermisos,
    logout
}