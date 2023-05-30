import React from 'react';
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';

 export const Auth = ({children}) => {
    const token = useSelector(state => state.user.token);
        if (token) {
            return children;
        }

        return <Navigate to='/' />
}


