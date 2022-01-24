import { LoggerService } from "../../../servicios/logger.service"
import { Axios, AxiosCache } from "../../../servicios/red.service"


const logger = new LoggerService('permisos');



/**
 * 
 */
const cambiarPermiso = (usuario_id, permiso, setPermiso, alcance) => {
    if (permiso.alcance % alcance === 0) {
        // quitar el permiso
        permiso.alcance /= alcance;
        setPermiso({ ...permiso })

        if (permiso.alcance === 1) {
            Axios.delete(`/v1/permiso?permiso_id=${permiso.id}&usuario_id=${usuario_id}`)
                .then((resp) => {
                    logger.debug('cambiarPermiso', resp.data)
                })
                .catch((err) => {
                    logger.debug('cambiarPermiso', err);
                })
            return;
        }
    } else {
        // actualizar el permiso
        permiso.alcance *= alcance;
        setPermiso({ ...permiso })
    }

    // actualizar el permiso
    Axios.post('/v1/permiso', {
        "permiso_id": permiso.id,
        "usuario_id": usuario_id,
        "alcance": permiso.alcance
    })
        .then((resp) => {
            logger.debug('cambiarPermiso', resp.data)
        })
        .catch((err) => {
            logger.debug('cambiarPermiso', err);
        })
}


/**
 * Consultar lo permisos del usuario
 * 
 * @param {*} id 
 * @param {*} setPermisos 
 */
const obtenerPermisos = (id, setPermisos) => {
    AxiosCache(`/v1/permisos_usuario?id=${id}`)
        .then((resp) => {
            logger.debug('obtenerPermisos', resp.data);
            setPermisos(resp.data.permisos)
        })
        .catch((err) => {
            logger.debug('obtenerPermisos', err);
        })
}


/**
 * Exportaciones
 */
export {
    obtenerPermisos,
    cambiarPermiso
}