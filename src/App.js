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

import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Login from './pages/Login';
import AdminConsole from './pages/AdminConsole';



function App() {



  return (

    <>
      <Router>
        <Routes>
          <Route index path="/" element={<Login />} />
          <Route path="/adminConsole" element={<AdminConsole />}>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="services" element={<Services />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
