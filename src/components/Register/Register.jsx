import React, { Component } from 'react';
import { userRegister } from '../../api_caller';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Button  } from 'react-bootstrap';
import { Form, Input } from  '../FormProvider/FormProvider'

export default function Register (props){

    const submitForm = async data => {
        const response = await userRegister(data.username, data.password);
        response ? props.history.push("/login") : console.log("error registering")
    }

        return (
            <>
            <h2> Register form </h2>
            <Form onSubmit = {submitForm}>

                <Input type="text" name="username" placeholder="username" />
                <Input type="password" name="password" placeholder="password" /> 
                <Button variant="primary" type="submit">
                    Submit
                </Button>
           
            </Form>
            <p>Already registered? <Link to={`/login`}><Button variant="outline-primary">Go to login</Button></Link></p>

            <div className="problem-logging">
                <a href="">Forgot password?</a>
                <a href="">Report an issue</a>
            </div>
            </>
        )
}





function old () {
    return (<> {/* 
        <h2> Register form </h2>

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
                    required />
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
                    required />
            </Form.Group>

            <Button variant="primary" type="submit"> Submit </Button>
        </Form>


        <p>Already registered? <Link to={`/login`}><Button variant="outline-primary">Go to login</Button></Link></p>

        <div className="problem-logging">
            <a href="">Forgot password?</a>
            <a href="">Report an issue</a>
        </div>*/}
    </>)
    }