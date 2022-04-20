import React from "react";
import {Redirect, Route} from "react-router-dom";
import auth from "./auth";

const ProtectedRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={props => {
                if(auth.isAuthenticated()) {
                    return Component;
                } else {
                    return <Redirect to={{
                        pathname: '/login',
                        state: {
                            from: props.location
                        }
                    }} />
                }
            }}
        />
    )
}

const PublicRoute = ({component: Component, ...rest}) => {
    return(
        <Route
            {...rest}
            render={_ => {
                return Component;
            }}
        />
    )
}

export {
    ProtectedRoute,
    PublicRoute
}
