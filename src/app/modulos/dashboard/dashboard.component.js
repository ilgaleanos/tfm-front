import React from 'react';
// import { useNavigate } from 'react-router-dom';

import Plantilla from '../../componentes/plantilla/plantilla.component';

import './dashboard.styles.css'


function Dashboard() {
    // const navegar = useNavigate();

    /**
     * Hooks para dashboard
     */


    /**
     * render
     */
    return (
        <Plantilla >
            <div className="center">
                <iframe title='correlaciones' scrolling="no" src="https://datastudio.google.com/embed/reporting/2c564995-3f8e-4ad5-a28b-dd850664abeb/page/ymUkC" frameBorder="0" allowFullScreen></iframe>
            </div>
        </Plantilla>
    );
}

export default Dashboard;