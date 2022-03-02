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

                <Row >
                    <Col xs={12}>
                        <Typography className="titulo-intro" variant="h5" component="div">
                            Solución de visualización para los datos de SISCRIMEL de la RNEC.
                        </Typography>
                        <br />
                        <Typography className="introduccion" variant="body" component="div">
                            [...] Este trabajo aborda la detección del fraude por medio de herramientas de
                            visualización de los datos para convertir los  datos en información.
                            Con lo anterior, se pretende generar banderas de análisis, con miras a
                            detectar posibles fraudes electorales. En lo que refiere al caso colombiano,
                            la Misión de Observación Electoral ha emitido un informe el cual afirma que:
                            La ilegalidad y las elecciones van de la mano o al menos esa parece ser la sensación
                            que cada proceso electoral deja en la ciudadanía. En efecto, durante los procesos
                            electorales más recientes no fue extraño escuchar versiones sobre cómo distintos
                            candidatos llevaron a cabo estrategias ilegales con el fin de garantizar un
                            resultado electoral a su favor. <br /><br />

                            Si bien este informe hace alusión a la situación nacional durante el año 2013,
                            precisa en el aumento de denuncias de crímenes electorales que pasaron de 597 en
                            2002 a 1350 en 206 y 2052 en 2007, cifras que, aunque inquietantes, develan una
                            cruda realidad de una sociedad que bajo sus cifras electorales no guarda una completa legalidad.
                            Este crecimiento en las denuncias lejos de ser asunto del pasado revela una problemática actual.
                            Al respecto, Ávila sostiene que, a lo largo de las entonces recientes elecciones
                            presidenciales en Colombia, se habla de complicidad de jurados, "funcionarios inescrupulosos"
                            de la misma registraduría. A razón de ello, resulta importante preguntarse: ¿es el factor
                            humano un determinante en la manipulación de  las votaciones? ¿Sería viable formular
                            sistemas auditados y automatizados para realizar estas tareas? <br /><br />

                            Si bien el presente documento no otorga respuesta a estas preguntas, sustenta la
                            hipótesis de si al tener un acceso más tangible a la información recopilada existiese
                            una cierta probabilidad de levantar banderas de alarma para posibles investigaciones
                            que permitiesen, incluso, rastrear las inquietudes anteriores. Bajo las circunstancias
                            dadas y sumado a la labor tecnológica que otorgan los medios suficientes para procesar
                            volúmenes de información en tiempos razonables que permiten acceder fácilmente a
                            información relacionada con votaciones ciudadanas, es menester enunciar el carácter
                            ético que se encuentra presente, pues en el más óptimo de los casos, todas las personas
                            deberían tener acceso y derecho a obtener esta información bajo las normas de seguridad
                            e integridad establecidas para tal fin. [...]
                        </Typography>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Inicio;