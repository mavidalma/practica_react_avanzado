import React from 'react';
import { userRegister } from '../../api_caller';
import { BrowserRouter as Link } from "react-router-dom";
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
                <a href="/">Forgot password?</a>
                <a href="/">Report an issue</a>
            </div>
            </>
        )
}

