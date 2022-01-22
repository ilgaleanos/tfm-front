import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

import { guard } from '../servicios/guard.service';

import Inicio from '../modulos/inicio/inicio.component';
import Login from '../modulos/login/login.component';
import Otp from '../modulos/otp/otp.component';



/**
 *  Creamos el tema
 */
let theme = createTheme({
  palette: {
    primary: {
      main: '#ff914d',
      contrastText: '#fefefe'
    },
    secondary: {
      main: '#5d4037',
    },
  },
});


/**
 * Si está logueado va a inicio
 * 
 * @param {*} Componente 
 * @returns 
 */
const invalidarLogin = (Componente) => {
  return guard() ? <Navigate replace to="/inicio" /> : <Componente />;
}


/**
 * Si no está logueado va a login
 * 
 * @param {*} Componente 
 * @returns 
 */
const validarUsuario = (Componente) => {
  return guard() ? <Componente /> : <Navigate replace to="/login" />;
}


/**
 * Router de la aplicación 
 * 
 * @returns Navigator
 */
function Navigator() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={invalidarLogin(Login)}></Route>
          <Route path="/login" element={invalidarLogin(Login)}></Route>
          <Route path="/validar_otp" element={invalidarLogin(Otp)}></Route>
          <Route path="/inicio" element={validarUsuario(Inicio)}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Navigator;