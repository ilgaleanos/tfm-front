import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactDatatable from '@ashvin27/react-datatable';

import Plantilla from '../../componentes/plantilla/plantilla.component';
import { configDataTables } from "../../componentes/datatables/datatables.logic";

import './usuarios.styles.css'
import {
    columnas,
    cargarUsuarios,
    obtenerPermisos
} from './usuarios.logic'


function Usuarios() {
    const navegar = useNavigate();
    const permisos = obtenerPermisos();

    /**
     * Hooks para Usuarios
     */
    const [usuarios, setUsuarios] = useState([]);


    /**
    * useEfects
    */
    useEffect(() => {
        cargarUsuarios(setUsuarios, navegar);
    }, [navegar]);


    /**
     * Validamos los permisos
     */
    if (permisos['p-2'] % 2 !== 0) {
        navegar('/inicio')
    }


    /**
     * render
     */
    return (
        <Plantilla titulo='Usuarios'>
            Algunos comentarios acerca de los usuarios <br /><br />
            <ReactDatatable
                className='table table-bordered table-sm table-striped table-responsive-sm'
                config={configDataTables}
                records={usuarios}
                columns={columnas}
            />
        </Plantilla>
    );
}

export default Usuarios;