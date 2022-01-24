import { Fragment } from "react";

import { LoggerService } from "../../servicios/logger.service";
import { AxiosCache } from "../../servicios/red.service";
import { StorageService } from "../../servicios/storage.service";
import { formatearDatetime } from "../../componentes/datatables/datatables.logic";

let navegacion;
const logger = new LoggerService('usuarios');
const storeService = new StorageService();

const columnas = [
    {
        key: 'id',
        text: 'ID',
        align: 'center',
        className: 'center',
        sortable: true
    },
    {
        key: 'nombre',
        text: 'Nombre',
        align: 'left',
        sortable: true
    },
    {
        key: 'apellido',
        text: 'Apellido',
        align: 'left',
        sortable: true
    },
    {
        key: 'correo',
        text: 'Correo',
        align: 'left',
        sortable: true
    },
    {
        key: 'ultimo_ingreso',
        text: 'Último ingreso',
        align: 'left',
        sortable: true,
        cell: record => {
            return (
                <Fragment>
                    {formatearDatetime(record.ultimo_ingreso)}
                </Fragment>
            );
        }
    }
];

/**
 * 
 */
const agregarEditar = () => {
    let permisos = obtenerPermisos();

    columnas.push({
        key: 'action',
        text: 'Accion',
        className: 'center',
        width: 100,
        align: 'center',
        sortable: false,
        cell: record => {
            if (permisos['p-2'] % 7 === 0) {
                return (
                    <Fragment>
                        <span className="editar"
                            onClick={() => navegacion('/usuario/' + record.id)}>
                            <i className="fas fa-edit"></i>
                        </span>
                        &nbsp;&nbsp;&nbsp;
                        <span className="eliminar"
                            onClick={() => navegacion('/usuario_eliminar/' + record.id)}>
                            <i className="fas fa-trash"></i>
                        </span>
                    </Fragment>
                )
            }

            if (permisos['p-2'] % 5 === 0) {
                return (
                    <Fragment>
                        <span className="editar"
                            onClick={() => navegacion('/usuario/' + record.id)}>
                            <i className="fas fa-edit"></i>
                        </span>
                    </Fragment>
                )
            }
        }
    })
}



/**
 * Permisos del usuario
 * @returns 
 */
const obtenerPermisos = () => {
    return storeService.getPermisos()
}


/**
 * Llamada al api para cargar usuarios
 * 
 * @param {*} setUsuarios 
 * @param {*} navegar
 */
const cargarUsuarios = (setUsuarios, navegar) => {
    navegacion = navegar;

    let permisos = obtenerPermisos();
    if (permisos['p-2'] % 5 !== 0 && columnas.length === 6) {
        columnas.pop()
    }

    if (permisos['p-2'] % 5 === 0 && columnas.length === 5) {
        agregarEditar()
    }

    setUsuarios(storeService.getItem('/v1/usuarios').usuarios || [])
    AxiosCache('/v1/usuarios')
        .then((resp) => {
            logger.debug('cargarUsuarios', resp.data);
            setUsuarios(resp.data.usuarios);
        })
        .catch((err) => {
            logger.error('cargarUsuarios', err);
        })
}


/**
 * Exportaciones
 */
export {
    columnas,
    cargarUsuarios,
    obtenerPermisos
}