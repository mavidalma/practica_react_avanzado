import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter, Redirect } from "react-router-dom";
import Register from './Register/Register'
import Login from './Login/Login'

function App() {
  return (
    <Router>
      <Switch>
      <Route path="/login" component = {Login} />
      <Route path="/register" component = {Register} />
      <Redirect to="/login" />
      </Switch>
      
    </Router>
  );
}

export default App;
