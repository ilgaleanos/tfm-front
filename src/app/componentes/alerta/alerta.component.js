
import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';


import { generarTitulo } from './alerta.logica';



export default function Alerta(props) {
    const { severidad, titulo } = props

    return (
        <Alert severity={severidad}>
            <AlertTitle>{titulo ? titulo : generarTitulo(severidad)}</AlertTitle>
            {props.children}
        </Alert>
    );
}