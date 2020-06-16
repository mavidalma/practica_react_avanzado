import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import './navBar.css';


export default function navBar(props) {
    const location = props.location.pathname; 
    console.log("navbar location: ", location);
    return (
        <div className="navBar">
            <h1 id="logo"><Link to="/anuncios" className="logo-link" style={{ textDecoration: 'none', color: "white" }}>anuncia<span>LOL</span> </Link></h1>
            <div className="links">
                { location === "/login" || location === "/register" ? <UnloggedUser /> : <LoggedUser />}
            </div>

        </div>
    )
}

function UnloggedUser () {
return <a className="linkBack" href="http://www.mavidalma.es"> Volver a la home </a>;
};

function LoggedUser () {
    return (
        <>    
            <Link to="/create" style={{ "margin-right": "15px" }}><div>Crear anuncio</div></Link>
            <Link to="/login"><button>Log out</button></Link>
        </>
    )
}


