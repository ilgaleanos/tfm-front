import React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


import './navbar.styles.css'
import {
    logout
} from './navbar.logic'



function NavBar() {
    const navegar = useNavigate();

    return (
        <div>
            <AppBar position="fixed" color="secondary">
                <Container disableGutters maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* LOGO */}
                        <Box sx={{ display: { xs: 'none', md: 'block' } }} onClick={() => { navegar('/inicio') }}>
                            <img className="logo-menu" alt="Siriviendo a colombia" src={process.env.PUBLIC_URL + '/static/img/logo512_inv.png'} />
                        </Box>


                        {/* MENU */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'flex' } }}>
                            <button className="boton-primario" key="Usuarios" onClick={() => { navegar('/usuarios') }} sx={{ my: 2, display: 'block' }}>
                                <Box sx={{ display: { xs: 'none', md: 'inline' } }}><i className="fas fa-users"></i></Box> &nbsp; Usuarios
                            </button>
                            <button className="boton-primario" key="Dashboard" onClick={() => { navegar('/dashboard') }} sx={{ my: 2, display: 'block' }}>
                                <Box sx={{ display: { xs: 'none', md: 'inline' } }}><i className="fas fa-tachometer-alt"></i></Box> &nbsp; Dashboard
                            </button>
                        </Box>

                        {/* LOGOUT */}
                        <button className='boton-primario derecha' onClick={logout}>
                            Logout &nbsp; <Box sx={{ display: { xs: 'none', md: 'inline' } }}><i className="fas fa-sign-out-alt"></i></Box>
                        </button>

                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}

export default NavBar;