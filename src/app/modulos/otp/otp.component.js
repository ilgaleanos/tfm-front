import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-grid-system';

import './otp.styles.css'

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Button from '@mui/material/Button';

import {
    generarToken,
    fijarOtp
} from './otp.logic'


function Otp() {

    const navegar = useNavigate();

    /**
     * Hooks para el Otp
     */
    const [otp, setOtp] = useState("");
    const [invalido, setInvalido] = useState(false);
    const [cargando, setCargando] = useState(false);


    /**
     * render
     */
    return (
        <Container fluid className="otp">
            <Row justify="center" align="center">
                <Col xs={10} sm={7} md={6} lg={4} xxl={3} justify="center" align="center">
                    <img className="img-responsive otp-img" alt="Siriviendo a colombia" src={process.env.PUBLIC_URL + 'static/img/logo.png'} />
                </Col>
            </Row>
            <Row justify="center" align="center">
                <Col xs={10} sm={7} md={6} lg={4} xxl={3} justify="center" align="center" >
                    <form onSubmit={(event) => { generarToken(event, otp, setInvalido, setCargando, navegar) }} className="form">
                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            <TextField
                                error={invalido}
                                id="form-usuario"
                                label="OTP"
                                value={otp}
                                onChange={(event) => { fijarOtp(event, setOtp, setInvalido); }}
                                helperText={invalido ? 'OTP inválida' : ''}
                            />
                        </FormControl>

                        <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                            {cargando ?
                                <Button className="button" variant="contained" type="submit" disabled>
                                    Validando  &nbsp;<i className="fas fa-cog fa-spin"></i>
                                </Button>

                                :
                                <Button className="button" variant="contained" type="submit">
                                    Validar OTP  &nbsp;<i className="fas fa-lock"></i>
                                </Button>
                            }
                        </FormControl>
                    </form>
                </Col>
            </Row>
        </Container>
    );
}

export default Otp;