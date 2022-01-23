import React from 'react';
import { useNavigate } from 'react-router-dom';

import Plantilla from '../../componentes/plantilla/plantilla.component';

import './dashboard.styles.css'
import { } from './dashboard.logic'


function Dashboard() {
    const navegar = useNavigate();

    /**
     * Hooks para dashboard
     */


    /**
     * render
     */
    return (
        <Plantilla titulo='Dashboard'>
            Hola
        </Plantilla>
    );
}

export default Dashboard;