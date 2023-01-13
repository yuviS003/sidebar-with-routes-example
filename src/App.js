import React, { useContext, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

import * as components from "./components";
import { PrivateRoute, AdminConsoleLander, FallbackRoute } from "./components";

import Login from "./pages/Login";
import AdminConsole from "./pages/AdminConsole";
import LoginState from "./context/Login/LoginState";

function App() {
  // const userDetails = useContext(loginContext).userData
  // const [roles, setRoles] = useState(userDetails.data.role)
  const [roles, setRoles] = useState(["Home", "About", "Contact", "Services"]);

  // console.log("components:", components);

  return (
    <LoginState>
      <Routes>
        {/* public route */}
        <Route path="/" exact element={<Login />} />

        {/* protected routes */}
        <Route path="/adminconsole" element={<AdminConsole />}>
          <Route index element={<AdminConsoleLander />} />

          {roles.map((Role, i) => {
            console.log("Role:", Role);
            const Component = components[Role];
            return (
              <Route
                path={`${Role}`}
                element={
                  // Don't think that PrivateRoute component is even required since we are simple not gonna render the routes for which we don't have a Role
                  // <PrivateRoute requiredRole={`${Role}`}>
                  <Component />
                  // </PrivateRoute>
                }
              />
            );
          })}
        </Route>

        {/* fallback route */}
        {/* This would act as unauthorized/not found component as accessing routes that are not rendered will redirect to this component */}
        <Route path="*" element={<FallbackRoute />} />
      </Routes>
    </LoginState>
  );
}

export default App;
