import React from 'react';

import Plantilla from '../../componentes/plantilla/plantilla.component';
import { obtenerPermisos } from './dashboard.logic';

import './dashboard.styles.css'


function Dashboard() {
    const permisos = obtenerPermisos();

    /**
     * Validamos los permisos
     */
    if (!permisos['p-3'] || permisos['p-3'] % 2 !== 0) {
        return null
    }


    /**
     * render
     */
    return (
        <Plantilla >
            <div className="center">
                <iframe title='correlaciones' scrolling="no" src="https://datastudio.google.com/embed/reporting/2c564995-3f8e-4ad5-a28b-dd850664abeb/page/p_34w584hcsc" frameBorder="0" allowFullScreen></iframe>
            </div>
        </Plantilla>
    );
}

export default Dashboard;