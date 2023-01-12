import { useState } from "react";
import LoginContext from "./LoginContext";

const LoginState = (props) => {
  // const userData = {
  //     "data": {
  //         "token": "555",
  //         "role": [
  //             "about",
  //             "contact",
  //             "service"
  //         ]
  //     }
  // }
  const [userData, setUserData] = useState({
    data: {
      token: "lk",
      role: ["Home", "About", "Contact", "Services"],
    },
  });
  return (
    <LoginContext.Provider value={{ userData, setUserData }}>
      {props.children}
    </LoginContext.Provider>
  );
};

export default LoginState;
