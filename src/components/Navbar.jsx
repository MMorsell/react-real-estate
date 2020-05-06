import React from "react";
import { Router, Route, NavLink, Switch } from "react-router-dom";
import { About } from '../pages/about'
import { Market } from '../pages/market'
import { Home } from '../pages/home'

export default Navbar => {
    return (
        <ul className="header">
            <Router>
                <div>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/topics">Topics</NavLink>
                        </li>
                    </ul>

                    <Switch>
                        <Route path="/contact">
                            <About />
                        </Route>
                        <Route path="/market">
                            <Market />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </ul>
    )
}