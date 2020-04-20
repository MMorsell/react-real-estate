import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";

function navbar(){
    return (
        <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/market">Market</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
    )
}