import React from 'react';
import { userRegister } from '../../api_caller';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button  } from 'react-bootstrap';
import { Form, Input } from  '../FormProvider/FormProvider'
import "../Login/login.css"

export default function Register (props){

    const submitForm = async data => {
        const response = await userRegister(data.username, data.email, data.password);
        response ? props.history.push("/login") : console.log("error registering")
    }
    const initialState = {
        username: "",
        password: "",
        email: ""
    }

        return (
            <div className="loginBackground">
            <div className="loginContainer">
            <h2> Register form </h2>
            <Form onSubmit = {submitForm} initialState={initialState}>

                <Input type="text" name="username" placeholder="username" />
                <Input type="password" name="password" placeholder="password" /> 
                <Input type="email" name="email" placeholder="email" /> 
                <Button variant="primary" type="submit">
                    Submit
                </Button>
           
            </Form>
            <p>Already registered? <Link to={`/login`}><Button variant="outline-primary">Go to Login</Button></Link></p>

            <div className="problem-logging">
                <a href="/">Forgot password?</a>
                <a href="/">Report an issue</a>
            </div>
            </div>
            </div>
        )
}

