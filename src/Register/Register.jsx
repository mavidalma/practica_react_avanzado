import React, { Component } from 'react';
import { userRegister } from '../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { Form, Button  } from 'react-bootstrap';

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
            <>
                <div className="welcome-mssg">
                    <h1> AnunciaLOL</h1>
                    <p> Our network is only available for registered and authorized users.</p>
                    <h2> Register form </h2>
                </div>

                <Form id="register-form"
                    className="register"
                    onSubmit={this.submitForm}>

                    <Form.Group controlId="formUsername">
                        <Form.Label>User name</Form.Label>
                        <Form.Control name="username"
                            id="username"
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
                            id="password"
                            className="password form-input"
                            type="password"
                            placeholder="password"
                            onChange={this.typeOnInput}
                            required />
                    </Form.Group>

                    <Button variant="primary" type="submit"> Submit </Button>
                </Form>


                <p>Already registered? <Button variant="outline-primary"><Link to={`/login`}>Go to login</Link></Button></p>

                <div className="problem-logging">
                    <a href="">Forgot password?</a>
                    <a href="">Report an issue</a>
                </div>
            </>
        )
    }
}