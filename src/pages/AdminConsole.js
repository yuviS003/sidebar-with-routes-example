import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link, Outlet } from 'react-router-dom';
import LoginContext from '../context/Login/LoginContext';

const drawerWidth = 240;

export default function AdminConsole() {
    const userDetails = useContext(LoginContext).userData
    console.log(userDetails)
    const [roles, setRoles] = useState(userDetails.data.role)
    console.log(roles);
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed"
                sx={{
                    zIndex: (theme) => theme.zIndex.drawer + 1,
                    background: "#2d2d30",
                }}        >
                <Toolbar>
                    <Typography variant="h6" noWrap component="div">
                        <img
                            // src={finactLogo}
                            src="	https://www.treleva.org/api/testWebsite/assets/img/backgrounds/fintech-logo.png"
                            alt="Finact - Admin Console"
                            className="w-[12rem]"
                        />
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        <div className="sticky top-0 p-4 uppercase text-center font-bold text-lg">admin console</div>
                        <Divider />
                        {/* <Link to='/adminConsole/About'>
                            <div className="nav-links">About</div>
                        </Link>
                        <Divider />
                        <Link to='/adminConsole/Contact'>
                            <div className="nav-links">Contact</div>
                        </Link>
                        <Divider />
                        <Link to='/adminConsole/Services'>
                            <div className="nav-links">Services</div>
                        </Link>
                        <Divider /> */}
                        {
                            roles.map((role, index) => {
                                return (
                                    <div key={index}>
                                        <Link to={`/adminConsole/${role}`}>
                                            <div className="nav-links">{role}</div>
                                        </Link>
                                        <Divider />
                                    </div>
                                )
                            })
                        }
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    )
}
