import React from "react";
import { Row, Col } from 'react-grid-system';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import Plantilla from "../../../componentes/plantilla/plantilla.component";



export default function Detalles(props) {
    const { usuario } = props;
    
    return (
        <Plantilla className="seccion" titulo="Detalles" >
            <Row>
                <Col xs={12}>
                    <p className="descripcion"> Detalles adicionales del usuario.</p>
                </Col>
            </Row>

            <Row>
                <Col xs={12}>
                    <List dense={true}>
                        {
                            Object.keys(usuario).sort().map((key) => {
                                return <ListItem disablePadding key={key}>
                                    <ListItemButton>
                                        <ListItemText primary={key} secondary={usuario[key]} />
                                    </ListItemButton>
                                </ListItem>
                            })
                        }
                    </List>
                </Col>
            </Row>
        </Plantilla >
    )
}