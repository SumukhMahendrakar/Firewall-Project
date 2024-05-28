import { AppBar, Toolbar, Typography } from '@mui/material';
import React from "react";
import Box from '@mui/material/Box';
import pfSenseLogo from '../Assets/pfSenseLogo.png';
import rvLogo from '../Assets/rvLogoTrans.png';
import { Link } from 'react-router-dom';

const Topnav = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 , marginBottom: '24px'}}>
                <AppBar position="static" enableColorOnDark={true} color='transparent' sx={{ background: '#3c3c3c', padding: '2px' }}>
                    <Toolbar>
                        <Link to={'/'}><img src={rvLogo} className='w-20 inline'/></Link>
                        <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} className='text-center text-white'>
                            Firewall
                        </Typography>
                        <img src={pfSenseLogo} className='w-32'/>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Topnav;