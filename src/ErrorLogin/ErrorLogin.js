import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";


export default class ErrorLogin extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error.message);
    console.log(error.stack);
    console.log(errorInfo);
    this.setState({ error });
  }

  render() {
    if (this.state.error.message === "Error: User not found") {
      return (
          <div className="error-message">
            <h1>Please log in</h1>
            <h2> In order to use our patform you have to be a registered user.</h2>
              
            <p>Already register? <Link to="/login"><button>Go to login</button> </Link> </p>
            <p>Want to create an account? <Link to="/register"><button>Go to register</button> </Link></p>
          </div>
        )
    } else if (this.state.error){
      return (
      <div>
        <h1>{this.state.error}</h1>
        <h2>{this.state.error.message}</h2>
        
      </div>
      )
    } else {
      return this.props.children;
    }
  }
}