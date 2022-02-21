import React, { useState } from 'react';
import { Row, Col } from 'react-grid-system';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Plantilla from '../../componentes/plantilla/plantilla.component';
import {
    obtenerPermisos,
    fijarCampo,
    consultarModelos
} from './modelos.logic';

import './modelos.styles.css'


function Modelos() {
    const permisos = obtenerPermisos();

    const [cargando, setCargando] = useState(false);
    const [regresion, setRegresion] = useState(0);
    const [red, setRed] = useState(0);

    const [form, setForm] = useState({
        "pib": 7022,
        "participaciones": 46510910822,
        "regalias": 23360343664,
        "censo_electoral": 146635,
        "censo_habitacional": 214539,
        "homicidios": 5.39
    });

    /**
     * Hooks para modelos
     */


    /**
     * Validamos los permisos
     */
    if (!permisos['p-4'] || permisos['p-4'] % 2 !== 0) {
        return null
    }


    /**
     * render
     */
    return (
        <Plantilla titulo="Sistema de proyección de delitos">

            Proporcionando las siguientes variables de un municipio en particular los modelos propuestos te darán su proyección de cuantos son las denuncias esperadas en un año de elecciones 
            <br />
            <br />

            {/* FORMULARIO */}
            <Row justify="center" align="center">
                <Col xs={10} sm={7} md={6} lg={4} xxl={3} justify="center" align="center" >

                    <form onSubmit={(event) => { consultarModelos(event, form, setRegresion, setRed, setCargando) }} className="form">

                        {/* Formulario */}
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                id="pib"
                                label="PIB"
                                value={form.pib}
                                onChange={(event) => { fijarCampo(event, form, setForm); }}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                id="participaciones"
                                label="Participaciones"
                                value={form.participaciones}
                                onChange={(event) => { fijarCampo(event, form, setForm); }}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                id="regalias"
                                label="Regalias"
                                value={form.regalias}
                                onChange={(event) => { fijarCampo(event, form, setForm); }}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                id="censo_electoral"
                                label="Censo electoral"
                                value={form.censo_electoral}
                                onChange={(event) => { fijarCampo(event, form, setForm); }}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                id="censo_habitacional"
                                label="Censo Habitacional"
                                value={form.censo_habitacional}
                                onChange={(event) => { fijarCampo(event, form, setForm); }}
                            />
                        </FormControl>
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                id="homicidios"
                                label="Homicidios"
                                value={form.homicidios}
                                onChange={(event) => { fijarCampo(event, form, setForm); }}
                            />
                        </FormControl>

                        {/* BOTON EVALUAR */}
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            {cargando ?
                                <Button className="button" variant="contained" type="submit" disabled>
                                    Proyectando  &nbsp;<i className="fas fa-cog fa-spin"></i>
                                </Button>
                                :
                                <Button className="button" variant="contained" type="submit">
                                    Proyectar
                                </Button>
                            }
                        </FormControl>
                    </form>
                </Col>
            </Row>

            {/* Resultados */}
            <Row justify="center" align="center">
                <Col xs={10} sm={7} md={6} lg={4} xxl={3} justify="center" align="center" >
                    <List dense={false}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Modelo de regresión" secondary={regresion} />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Modelo de red neuronal" secondary={red} />
                            </ListItemButton>
                        </ListItem>

                    </List>
                </Col>
            </Row>
        </Plantilla>
    );
}

export default Modelos;