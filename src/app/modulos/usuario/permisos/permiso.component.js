import React, { Fragment, useState } from "react";
import { Checkbox } from "@mui/material";
import { Row, Col } from 'react-grid-system';

import { cambiarPermiso } from './permisos.logic'

export default function Permiso(props) {
    const { permiso, usuario_id } = props;

    const [permisoState, setPermisoState] = useState({ ...permiso })


    return (
        <Fragment >
            <Row>
                <Col xs={4}>{permiso.nombre}</Col>
                <Col xs={2}><Checkbox checked={permisoState.alcance % 2 === 0 ? true : false} onChange={() => { cambiarPermiso(usuario_id, permisoState, setPermisoState, 2) }} /></Col>
                <Col xs={2}><Checkbox checked={permisoState.alcance % 3 === 0 ? true : false} onChange={() => { cambiarPermiso(usuario_id, permisoState, setPermisoState, 3) }} /></Col>
                <Col xs={2}><Checkbox checked={permisoState.alcance % 5 === 0 ? true : false} onChange={() => { cambiarPermiso(usuario_id, permisoState, setPermisoState, 5) }} /></Col>
                <Col xs={2}><Checkbox checked={permisoState.alcance % 7 === 0 ? true : false} onChange={() => { cambiarPermiso(usuario_id, permisoState, setPermisoState, 7) }} /></Col>
            </Row>
        </Fragment >
    )
}