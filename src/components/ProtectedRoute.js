import { Route, Redirect } from "react-router";
import React from 'react';
import {useSelector} from "react-redux";

function ProtectedRoute ({ component: Component,...restOfProps}){
    const isAuthenticated = useSelector(state => state.isAuthenticated);
    console.log(isAuthenticated)

    return(
        <Route {...restOfProps} render={newprops =>
        isAuthenticated? <Component {...newprops} /> :
        <Redirect to='/' />} />
    )
}

export default ProtectedRoute;

