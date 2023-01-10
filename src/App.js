import React, { useContext, useState } from 'react';
import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import { About, Contact, Services, PrivateRoute, AdminConsoleLander, FallbackRoute } from './components'

import Login from './pages/Login';
import AdminConsole from './pages/AdminConsole';
import LoginState from './context/Login/LoginState'


function App() {
  // const userDetails = useContext(loginContext).userData
  // const [roles, setRoles] = useState(userDetails.data.role)
  const [roles, setRoles] = useState(['About', 'Contact'])

  return (
    <LoginState>
      <Routes>
        {/* public route */}
        <Route path="/" exact element={<Login />} />

        {/* protected routes */}
        <Route path="/adminconsole" element={<AdminConsole />}>
          <Route index element={<AdminConsoleLander />} />
          <Route path="About" element={<PrivateRoute requiredRole='About'><About /></PrivateRoute>} />
          <Route path="Contact" element={<PrivateRoute requiredRole='Contact'><Contact /></PrivateRoute>} />
          <Route path="Services" element={<PrivateRoute requiredRole='Services'><Services /></PrivateRoute>} />
          {/* {handlePrivateRoutes(['About', 'Contact', 'Services'])} */}
          {/* {
            roles.map((Role, i) => {
              return (
                <Route path={`${Role}`} element={<PrivateRoute requiredRole={`${Role}`}>{<Role/>}</PrivateRoute>} />
              )
            })
          } */}
        </Route>

        {/* fallback route */}
        <Route path="*" element={<FallbackRoute />} />

      </Routes>
    </LoginState>

  );
}

export default App;
