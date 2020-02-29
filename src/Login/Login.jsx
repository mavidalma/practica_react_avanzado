import React, {Component} from 'react';
import {userLogin} from '../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { Form, Button  } from 'react-bootstrap';

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

        response ? this.props.history.push("/anuncios") : console.log("error loging in")
    }
    render() {
        return (
            <>
            <div className="welcome-mssg">
			    <div>
				    <h1> AnunciaLOL</h1>
                    <p> Please log into your account</p>
			    </div>
                <h2> LOGIN </h2>
            </div>

            <Form id="register-form" 
                    className="register"
                    onSubmit={this.submitForm}>

                <Form.Group controlId="formUsername">
                    <Form.Label>User name</Form.Label>
                        <Form.Control name="username" 
                                        className="form-input" 
                                      type="text" 
                                      placeholder="username"
                                      value={this.state.username}
                                      onChange={this.typeOnInput} 
                                      required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                     <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                                  placeholder="Password" 
                                  name="password" 
                                  className="password form-input" 
                                  type="password" 
                                  placeholder="password"
                                  onChange={this.typeOnInput}  
                                  required/>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



                 {/*  <form 
                    id="register-form" 
                    className="register"
                    onSubmit={this.submitForm}>
					    <h2> LOGIN </h2>
					    <label htmlFor="username" className="form-label"> Username </label>
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
					    <label htmlFor="password" className="form-label"> password </label>
                        <input name="password" 
                               id="password" 
                               className="password form-input" 
                               type="password" 
                               placeholder="password"
                               onChange={this.typeOnInput}  
                               required>    
                        </input>
					    <button type="submit">Submit</button>
				    </form> */} 

            
                <p>Not registered yet? <Button variant="outline-primary"><Link to={`/register`}>Go to register</Link></Button></p>

			    <div className="problem-logging">
			        <a href="">Forgot password?</a>
			        <a href="">Report an issue</a>
			    </div>

            </>
        )
    }
}