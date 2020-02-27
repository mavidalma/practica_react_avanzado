import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import './navBar.css';


export default function navBar() {

    return (
        <div className="navBar">
            <h1 id="logo"><Link to="/anuncios">anuncia<span>LOL</span> </Link></h1>
            <div className="links"> 
            <Link to="/create"><div>Crear anuncio</div></Link>
            <Link to="/login"><button>Log out</button></Link>
            </div>

        </div>
    )
}

