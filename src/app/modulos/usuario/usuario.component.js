import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import Detalles from './detalles/detalles.component'
import EditarUsuario from './editar/editar.component'
import Permisos from './permisos/permisos.component'

import './usuario.styles.css'
import {
    cargarUsuario,
    obtenerPermisos
} from './usuario.logic'


export default function Usuario() {
    const { id } = useParams();
    const permisos = obtenerPermisos()

    /**
     * Hooks para Usuarios
     */
    const [usuario, setUsuario] = useState({});


    /**
     * useEfects
     */
    useEffect(() => {
        cargarUsuario(id, setUsuario);
    }, [id])


    return (
        <Fragment>
            {/* SECCION DETALLES */}
            <Detalles usuario={usuario} />

            {/* EDITAR USUARIO */}
            {usuario.correo && permisos['p-2'] % 5 === 0 ? <EditarUsuario usuario_datos={usuario} /> : null}

            {/* SECCION PERMISOS */}
            {usuario.correo && permisos['p-1'] % 210 === 0 ? <Permisos usuario_id={id} /> : null}
        </Fragment>
    );
}