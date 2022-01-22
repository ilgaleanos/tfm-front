import React, { useEffect, useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function Inicio() {
    const [contador, setContador] = useState(0);

    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <IconButton edge="start" color="secondary" aria-label="menu" sx={{ mr: 2 }}>
                        {/* <MenuIcon /> */}
                    </IconButton>
                    <Typography variant="h6" color="inherit" component="div">
                        Sistema de visualización
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Inicio;