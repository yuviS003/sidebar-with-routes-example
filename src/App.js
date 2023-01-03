import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Login from './components/Login';

const drawerWidth = 240;


function App() {



  return (
    <Router>
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
              <Link to='/'>
                <div className="nav-links">Home</div>
              </Link>
              <Divider />
              <Link to='/about'>
                <div className="nav-links">About</div>
              </Link>
              <Divider />
              <Link to='/contact'>
                <div className="nav-links">Contact</div>
              </Link>
              <Divider />
              <Link to='/services'>
                <div className="nav-links">Services</div>
              </Link>
              <Divider />
            </List>
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Toolbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route exact path="/services" element={<Services />} />
          </Routes>
        </Box>
      </Box>
    </Router>

  );
}

export default App;
