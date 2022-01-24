import React, { useState } from "react";
import { Row, Col } from 'react-grid-system';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from "react-router";


import Plantilla from "../../componentes/plantilla/plantilla.component";


import {
    obtenerPermisos,
    eliminarUsuario
} from "./usuario_eliminar.logic";



export default function UsuarioEliminar(props) {
    const { id } = useParams();
    const navegar = useNavigate()
    const permisos = obtenerPermisos();


    /**
     * Hooks para Usuarios
     */
    const [cargando, setCargando] = useState(false);


    /**
     * Validamos los permisos
     */
    if (!permisos['p-2'] || permisos['p-2'] % 7 !== 0) {
        return null
    }


    return (
        <Plantilla className="contenido" titulo="Eliminar usuario" >
            <Row>
                <Col xs={12}>
                    <p className="descripcion"> ¿Está seguro de eliminar este usuario? </p>
                </Col>
            </Row>

            {/* FORMULARIO */}
            <Row justify="center" align="center">
                <Col xs={10} sm={7} md={6} lg={4} xxl={3} justify="center" align="center" >

                    <form onSubmit={(event) => { eliminarUsuario(event, id, setCargando, navegar) }} className="form">
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            {cargando ?
                                <Button className="button" variant="contained" type="submit" disabled>
                                    Eliminando  &nbsp;<i className="fas fa-cog fa-spin"></i>
                                </Button>
                                :
                                <Button className="button" variant="contained" type="submit">
                                    Eliminar
                                </Button>
                            }
                        </FormControl>
                    </form>
                </Col>
            </Row>
        </Plantilla >
    )
}