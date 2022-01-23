import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import Plantilla from "../../componentes/plantilla/plantilla.component";
import Detalles from './detalles/detalles.component'
import EditarUsuario from './editar/editar.component'

import './usuario.styles.css'
import {
    cargarUsuario,
} from './usuario.logic'


export default function Usuario() {
    const { id } = useParams();

    /**
     * Hooks para Usuarios
     */
    const [usuario, setUsuario] = useState({
        correo: '',
        nombre: '',
        apellido: ''
    });

    
    /**
     * useEfects
     */
    useEffect(() => {
        cargarUsuario(id, setUsuario);
    }, [id])



    return (
        <Fragment>
            {/* EDITAR USUARIO */}
            <EditarUsuario usuario_datos={usuario} />

            {/* SECCION PERMISOS */}
            <Plantilla className="seccion" titulo="Permisos">
            </Plantilla>

            {/* SECCION DETALLES */}
            <Detalles usuario={usuario}/>

        </Fragment>
    );
}