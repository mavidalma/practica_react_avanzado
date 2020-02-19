import React, {Component} from 'react';
import {userLogin} from '../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

export default class Login extends Component {
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
        const response = await userLogin(this.state.username, this.state.password);

        response ? this.props.history.push("/home") : console.log("error loging in")
    }
    render() {
        return (
            <div className="welcome-mssg">
			    <div>
				    <h1> AnunciaLOL</h1>
                    <p> Please log into your account</p>
			    </div>
				
			    <div className="form-container">
                    <form 
                    id="register-form" 
                    className="register"
                    onSubmit={this.submitForm}>
					    <h2> LOGIN </h2>
					    <label for="username" className="form-label"> Username </label>
                        <input 
                            name="username" 
                            id="username" 
                            className="form-input" 
                            type="text" 
                            placeholder="username"
                            value={this.state.username}
                            onChange={this.typeOnInput} 
                            required>
                        </input>
					    <label for="password" className="form-label"> password </label>
                        <input name="password" 
                               id="password" 
                               className="password form-input" 
                               type="password" 
                               placeholder="password"
                               onChange={this.typeOnInput}  
                               required>    
                        </input>
					    <button type="submit">Submit</button>
				    </form>
                </div>
            
                <p>Not registered yet? <button><Link to={`/register`}>Go to register</Link></button></p>

			    <div className="problem-logging">
			        <a href="">Forgot password?</a>
			        <a href="">Report an issue</a>
			    </div>
		    </div>
        )
    }
}