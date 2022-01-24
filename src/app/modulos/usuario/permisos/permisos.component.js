import React, { useEffect, useState } from "react";
import { Row, Col } from 'react-grid-system';


import Plantilla from "../../../componentes/plantilla/plantilla.component";
import Permiso from "./permiso.component";


import { obtenerPermisos } from './permisos.logic'



export default function Detalles(props) {
    const { usuario_id } = props;

    const [permisos, setPermisos] = useState([])


    /**
     * useEfects
     */
    useEffect(() => {
        obtenerPermisos(usuario_id, setPermisos)
    }, [usuario_id]);


    return (
        <Plantilla className="seccion seccion-final" titulo="Permisos" >
            <Row>
                <Col xs={4}>Permisos del usuario</Col>
                <Col xs={2}>Visualizar</Col>
                <Col xs={2}>Crear</Col>
                <Col xs={2}>Editar</Col>
                <Col xs={2}>Eliminar</Col>
            </Row>
            <br/>
            <Row>
                <Col xs={12}>
                    {permisos?.map((permiso) => {
                        return <Permiso key={permiso.id} permiso={permiso} usuario_id={usuario_id} />
                    })}
                </Col>
            </Row>
        </Plantilla >
    )
}