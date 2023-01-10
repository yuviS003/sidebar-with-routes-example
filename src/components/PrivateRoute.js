import React from 'react';
import { Navigate } from 'react-router-dom';
import NotAuthorized from './NotAuthorized';
import { useContext } from 'react';
import loginContext from '../context/Login/LoginContext';

const PrivateRoute = ({ requiredRole, children }) => {
    console.log(requiredRole)

    const userDetails = useContext(loginContext).userData
    console.log('login context', userDetails)

    return userDetails ?
        userDetails.data.token
            ? userDetails.data.role.includes(requiredRole)
                ? (children)
                : (<NotAuthorized />)
            : (<Navigate to="/" replace />)
        : (<Navigate to="/" replace />)


    // return true ?
    //     (children) :
    //     (<div>Not Authorized</div>)
};

export default PrivateRoute;