import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container, Row, Col } from 'react-grid-system';
import Typography from '@mui/material/Typography';

import NavBar from '../../componentes/navbar/navbar.component';


import './inicio.styles.css'
import './inicio.logic'



function Inicio() {
    return (
        <div>
            <Container fluid className="contenido">
                {/* navegación */}
                <Row >
                    <Col xs={12}>
                        <NavBar />
                    </Col>
                </Row>

                <Row>
                    <Col xs={12}>
                        <Card >
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    Algún título de presentación
                                </Typography>
                                <br />
                                <Typography variant="body2" component="div">
                                    Algún contenido de presentación
                                </Typography>
                            </CardContent>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Inicio;