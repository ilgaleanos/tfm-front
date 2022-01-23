import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-grid-system';
import NavBar from '../navbar/navbar.component';



function Plantilla(props) {
    /**
     * render
     */
    return (
        <Container fluid className="contenido">
            {/* navegación */}
            <Row >
                <Col xs={12}>
                    <NavBar />
                </Col>
            </Row>

            {/* contenido */}
            <Row>
                <Col xs={12}>
                    <Card >
                        <CardContent>
                            <Typography variant="h5" component="div">
                                {props.titulo}
                            </Typography>
                            <br />
                            <Typography component="div">
                                {props.children}
                            </Typography>
                        </CardContent>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Plantilla;