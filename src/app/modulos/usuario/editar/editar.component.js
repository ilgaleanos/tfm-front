import React, { useState, Fragment } from "react";
import { Row, Col } from 'react-grid-system';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import Plantilla from "../../../componentes/plantilla/plantilla.component";
import Alerta from "../../../componentes/alerta/alerta.component";

import {
    fijarCorreo,
    fijarCampo,
    actualizarUsuario
} from './editar.logic'


export default function EditarUsuario(props) {

    const { usuario_datos } = props;


    /**
     * Hooks para Usuarios
     */
    const [usuario, setUsuario] = useState({ ...usuario_datos });
    const [form, setForm] = useState({
        correo: false,
        nombre: false,
        apellido: false
    });
    const [cargando, setCargando] = useState(false);

    const [severidad, setSeveridad] = useState("");
    const [respuesta, setRespuesta] = useState("");


    return (
        <Plantilla className='seccion' titulo='Editar usuario'>
            {/* SECCION EDITAR */}
            <Row>
                <Col xs={12}>
                    <p className="descripcion"> En el siguiente formulario puede editar los datos básicos del usuario.</p>
                </Col>
            </Row>
            <br />


            {/* ALERTAS */}
            {severidad === '' ? '' :
                <Fragment>
                    <Row justify="center" align="center">
                        <Col xs={10} sm={7} md={6} lg={4} xxl={3}>
                            <Alerta severidad={severidad}>
                                {respuesta}
                            </Alerta>
                        </Col>
                    </Row>
                    <br />
                </Fragment>
            }

            {/* FORMULARIO */}
            <Row justify="center" align="center">
                <Col xs={10} sm={7} md={6} lg={4} xxl={3} justify="center" align="center" >

                    <form onSubmit={(event) => { actualizarUsuario(event, usuario, form, setCargando, setSeveridad, setRespuesta) }} className="form">

                        {/* CORREO */}
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                id="correo"
                                error={form.correo}
                                label="Correo"
                                value={usuario.correo}
                                onChange={(event) => { fijarCorreo(event, usuario, setUsuario, form, setForm); }}
                                helperText={form?.correo ? 'Correo invalido' : ''}
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
                                helperText={form?.nombre ? 'Nombre invalido' : ''}
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