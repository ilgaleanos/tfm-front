import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from 'react-grid-system';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import Plantilla from "../../componentes/plantilla/plantilla.component";


import './usuario.styles.css'
import {
    cargarUsuario,
    fijarCorreo,
    fijarCampo,
    actualizarUsuario
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
    const [form, setForm] = useState({
        correo: false,
        nombre: false,
        apellido: false
    });
    const [cargando, setCargando] = useState(false);


    /**
     * useEfects
     */
    useEffect(() => {
        cargarUsuario(id, setUsuario);
    }, [id])



    return (
        <Plantilla titulo='Editar usuario'>
            <Row>
                <p className="descripcion"> A continuacion puede editar los datos personales del usuario </p>
            </Row>

            <Row justify="center" align="center">
                <Col xs={10} sm={7} md={6} lg={4} xxl={3} justify="center" align="center" >

                    {/* FORMULARIO */}
                    <form onSubmit={(event) => { actualizarUsuario(event, usuario, form, setCargando) }} className="form">

                        {/* CORREO */}
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                id="correo"
                                error={form.correo}
                                label="Correo"
                                value={usuario.correo}
                                onChange={(event) => { fijarCorreo(event, usuario, setUsuario, form, setForm); }}
                                helperText={form.correo ? 'Correo invalido' : ''}
                            />
                        </FormControl>

                        {/* nombre */}
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                id="nombre"
                                error={form.nombre}
                                label="Nombre"
                                value={usuario.nombre}
                                onChange={(event) => { fijarCampo(event, usuario, setUsuario, form, setForm); }}
                                helperText={form.nombre ? 'Nombre invalido' : ''}
                            />
                        </FormControl>

                        {/* CORREO */}
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                id="apellido"
                                error={form.apellido}
                                label="Apellido"
                                value={usuario.apellido}
                                onChange={(event) => { fijarCampo(event, usuario, setUsuario, form, setForm); }}
                                helperText={form.apellido ? 'Apellido invalido' : ''}
                            />
                        </FormControl>

                        {/* BOTON ACTUALIZAR */}
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            {cargando ?
                                <Button className="button" variant="contained" type="submit" disabled>
                                    Editando  &nbsp;<i className="fas fa-cog fa-spin"></i>
                                </Button>

                                :
                                <Button className="button" variant="contained" type="submit">
                                    Editar
                                </Button>
                            }
                        </FormControl>

                    </form>
                </Col>
            </Row>
        </Plantilla>
    );
}