import { Fragment } from "react";
import { LoggerService } from "../../servicios/logger.service";
import { AxiosCache } from "../../servicios/red.service";
import { StorageService } from "../../servicios/storage.service";

let navegacion;
const logger = new LoggerService('usuarios');
const storeSerice = new StorageService();

const columnas = [
    {
        key: "nombre",
        text: "Nombre",
        align: "left",
        sortable: true
    },
    {
        key: "apellido",
        text: "Apellido",
        align: "left",
        sortable: true
    },
    {
        key: "correo",
        text: "Correo",
        align: "left",
        sortable: true
    },
    {
        key: "ultimo_ingreso",
        text: "Último ingreso",
        align: "left",
        sortable: true,
        cell: record => {
            return (
                <Fragment>
                    {
                        (new Date(record.ultimo_ingreso).toDateString('es_CO')) + "  " + (new Date(record.ultimo_ingreso).toLocaleTimeString())}
                </Fragment>
            );
        }
    },
    {
        key: "action",
        text: "Action",
        className: "action",
        width: 100,
        align: "left",
        sortable: false,
        cell: record => {
            return (
                <Fragment>
                    <button
                        className="btn btn-sm"
                        onClick={() => navegacion('/usuario/' + record.id)}>
                        <i className="fas fa-edit"></i>
                    </button>
                </Fragment>
            );
        }
    }
];

/**
 * Llamada al api para cargar usuarios
 * 
 * @param {*} setUsuarios 
 * @param {*} navegar
 */
const cargarUsuarios = (setUsuarios, navegar) => {
    navegacion = navegar;

    setUsuarios(storeSerice.getItem('/v1/usuarios').usuarios || [])
    AxiosCache('/v1/usuarios')
        .then((resp) => {
            setUsuarios(resp.data.usuarios);
        })
        .catch((err) => {
            logger.error(err);
        })
}


/**
 * Exportaciones
 */
export {
    columnas,
    cargarUsuarios
}