import React from 'react';
import { useNavigate } from 'react-router-dom';

import Plantilla from '../../componentes/plantilla/plantilla.component';

import './permisos.styles.css'
import { } from './permisos.logic'


function Permisos() {
    const navegar = useNavigate();

    /**
     * Hooks para permisos
     */


    /**
     * render
     */
    return (
        <Plantilla titulo='Permisos'>
            Hola
        </Plantilla>
    );
}

export default Permisos;