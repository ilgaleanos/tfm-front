import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import './login.styles.css'

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import {
    generarToken,
    fijarCorreo
} from './login.logic'


function Login() {

    const navegar = useNavigate();

    /**
     * Hooks para el correo
     */
    const [correo, setCorreo] = useState("ilgaleanos@gmail.com");
    const [invalido, setInvalido] = useState(false);
    const [cargando, setCargando] = useState(false);


    /**
     * render
     */
    return (
        <Container fluid className="login">
            <Row justify="center" align="center">
                <Col xs={10} sm={7} md={6} lg={4} xxl={3} justify="center" align="center">
                    <img className="img-responsive login-img" alt="Siriviendo a colombia" src={process.env.PUBLIC_URL + 'static/img/logo.png'} />
                </Col>
            </Row>
            <Row justify="center" align="center">
                <Col xs={10} sm={7} md={6} lg={4} xxl={3} justify="center" align="center" >
                    <form onSubmit={(event) => { generarToken(event, correo, setInvalido, setCargando, navegar) }} className="form">
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                error={invalido}
                                id="form-usuario"
                                label="Usuario"
                                value={correo}
                                onChange={(event) => { fijarCorreo(event, setCorreo, setInvalido); }}
                                helperText={invalido ? 'Usuario invalido' : ''}
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            {cargando ?
                                <Button className="button" variant="contained" type="submit" disabled>
                                    Enviando  &nbsp;<i className="fas fa-cog fa-spin"></i>
                                </Button>

                                :
                                <Button className="button" variant="contained" type="submit">
                                    Enviar OTP  &nbsp;<i className="fas fa-lock"></i>
                                </Button>
                            }
                        </FormControl>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;