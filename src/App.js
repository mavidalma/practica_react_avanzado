import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import Register from './Register/Register';
import Login from './Login/Login';
import AdBoard from './AdBoard/AdBoard';
import adDetail from './adDetail/adDetail';
import CreateAd from './CreateAd/CreateAd';
import ErrorLogin from './ErrorLogin/ErrorLogin.js';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (

    <ErrorLogin>
      <Router>
          <div>
            <h1>anunciaLOL</h1>
            <Link to="/create"><div>Crear anuncio</div></Link>
            <Link to="/login"><button>Log out</button></Link>
          </div>
        <Switch>
          <Route exact path="/anuncios" component={AdBoard} />
          <Route path={`/anuncios/:id`} component={adDetail} />
          <Route path="/create" component={CreateAd} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect to="/login" />
        </Switch>

      </Router>
    </ErrorLogin>
  );
}

export default App;
