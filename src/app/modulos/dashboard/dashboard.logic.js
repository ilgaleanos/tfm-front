import { StorageService } from "../../servicios/storage.service";

const storeService = new StorageService();

/**
 * Permisos del usuario
 * @returns 
 */
 const obtenerPermisos = () => {
    return storeService.getPermisos()
}


/**
 * Exportaciones
 */
 export {
    obtenerPermisos
}