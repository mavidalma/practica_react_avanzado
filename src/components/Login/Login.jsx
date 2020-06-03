import React from 'react';
import {userLogin} from '../../api_caller';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button  } from 'react-bootstrap';
import { Form, Input } from '../FormProvider/FormProvider';

export default function Login (props) {

    const submitForm = async data => {
        const response = await userLogin(data.username, data.password);
        if(response) {
            sessionStorage.setItem("AnunciaLOLUserLogged", true);
            props.userLogin();
            props.history.push("/anuncios");
         } else {
            window.alert("error loging in")
         };
    }

        return (
            <>

            <h2> LOGIN </h2>
            <Form onSubmit = {submitForm} initialState= {{username:"", password:""}}>

                <Input type="email" name="email" placeholder="email" />
                <Input type="password" name="password" placeholder="password" /> 
                <Button variant="primary" type="submit">
                    Submit
                </Button>
           
            </Form>
            <p>Not registered yet? <Link to={`/register`}><Button variant="outline-primary">Go to register</Button></Link></p>

            <div className="problem-logging">
                <a href="/">Forgot password?</a>
                <a href="/">Report an issue</a>
            </div>

            </>
        )
}


function old () {
return (<> {/*
                <h2> LOGIN </h2>

            <Form id="register-form" 
                    className="register"
                    onSubmit={this.submitForm}>

                <Form.Group controlId="formUsername">
                    <Form.Label>User name</Form.Label>
                        <Form.Control name="username" 
                                        className="form-input" 
                                      type="text" 
                                      placeholder="useruser"
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


                <p>Not registered yet? <Link to={`/register`}><Button variant="outline-primary">Go to register</Button></Link></p>

			    <div className="problem-logging">
			        <a href="">Forgot password?</a>
			        <a href="">Report an issue</a>
			    </div>

*/} </>)
}