import {BrowserRouter as Router, Switch} from "react-router-dom";
import React from "react";
import {ProtectedRoute, PublicRoute} from "./routeAccessModifiers";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import Channel from "../components/pages/Channel";
import Explore from "../components/pages/Explore";
import Profile from "../components/pages/Profile";

export default function Routing() {
    return (
        <Router>
            <Switch>
                <PublicRoute path={'/'} exact component={<Home />} />
                <PublicRoute path={'/login'} exact component={<Login />} />
                <PublicRoute path={'/channel/:id'} exact component={<Channel />} />
                <PublicRoute path={'/channel'} exact component={<Channel />} />
                <PublicRoute path={'/explore'} exact component={<Explore />} />
                <ProtectedRoute path={'/profile'} exact component={<Profile />} />
            </Switch>
        </Router>
    )
}
