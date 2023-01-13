import { useState } from 'react';
import LoginContext from './LoginContext';

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
    const [userData, setUserData] = useState(
        {
            data: {
                token: "lk",
                role: [
                    "About",
                    "Contact",
                    "Services",
                    "Test"
                ]
            }
        })
    return (
        <LoginContext.Provider value={{ userData, setUserData }}>
            {props.children}
        </LoginContext.Provider>
    )
}

export default LoginState;