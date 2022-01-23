import React from 'react';
import { useNavigate } from 'react-router-dom';

import Plantilla from '../../componentes/plantilla/plantilla.component';

import './usuarios.styles.css'
import { } from './usuarios.logic'


function Usuarios() {
    const navegar = useNavigate();

    /**
     * Hooks para Usuarios
     */


    /**
     * render
     */
    return (
        <Plantilla titulo='Usuarios'>
            Hola
        </Plantilla>
    );
}

export default Usuarios;