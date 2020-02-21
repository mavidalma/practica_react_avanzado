import React, {Component} from 'react';
import {userRegister} from '../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
         username: "",
         password: "",   
        };
    }

    typeOnInput = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
      this.setState({
          [name]: value
      })  
    }

    submitForm = async event => {
        event.preventDefault();
        console.log(this.state.username, this.state.password)
        const response = await userRegister(this.state.username, this.state.password);
 
        response ? this.props.history.push("/login") : console.log("error registering")
    }
    
    render() {
        return (
            <div className="welcome-mssg">
			    <div>
				    <h1> AnunciaLOL</h1>
                    <p> Our network is only available for registered and authorized users.</p>
			    </div>
				
			    <div className="form-container">
                    <form 
                    id="register-form" 
                    className="register"
                    onSubmit={this.submitForm}>
					    <h2> Register form </h2>
					    <label for="username" className="form-label"> Username </label>
                        <input 
                            name="username" 
                            id="username" 
                            className="form-input" 
                            type="text" 
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.typeOnInput} 
                            required/>
					    <label for="password" className="form-label"> password </label>
                        <input name="password" 
                               id="password" 
                               className="password form-input" 
                               type="password" 
                               placeholder="password"
                               onChange={this.typeOnInput}  
                               required />    
					    <button type="submit">Submit</button>
				    </form>
                </div>
            
                <p>Already registered? <button><Link to={`/login`}>Go to login</Link></button></p>

			    <div className="problem-logging">
			        <a href="">Forgot password?</a>
			        <a href="">Report an issue</a>
			    </div>
		    </div>
        )
    }
}