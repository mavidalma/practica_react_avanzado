import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './navBar.css';


export default function navBar(props) {
    console.log(props.location.pathname)
  if (props.location.pathname === "/login" || props.location.pathname === "/register") {
        return (
            <div className="navBar">
                <h1 id="logo">anuncia<span>LOL</span></h1>
            </div>
        )
    } else {

        return (
            <div className="navBar">
                <h1 id="logo"><Link to="/anuncios" className="logo-link" style={{ textDecoration: 'none', color: "white" }}>anuncia<span>LOL</span> </Link></h1>
                <div className="links">
                    <Link to="/create" style={{ "margin-right": "15px" }}><div>Crear anuncio</div></Link>
                    <Link to="/login"><button>Log out</button></Link>
                </div>

            </div>
        )
    }
}

