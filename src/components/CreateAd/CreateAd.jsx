import React, { useState, useEffect } from 'react';
import { createAdvertisement } from '../../api_caller';
import AdForm from "../AdForm/AdForm";
import { Form, Input, Select } from '../FormProvider/FormProvider';
import { Button } from "react-bootstrap";

export default function createAd ({tags, ...props}) {
  /*  constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0,
            description: "",
            tags: [],
            type: "sell",
            photo: "",
            tagArray: [],
        };
    };*/

    const sendAd = data => {

        createAdvertisement(
            data.name,
            data.price,
            data.description,
            data.tags,
            data.type,
            data.photo)
            .then(result => result ? props.history.push("/anuncios") : console.log(result));
    }
/*
    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }
*/

        
    /*
getTags = () => {
        getTags()
            .then(data => this.setState({ tagArray: data }));
    }

    componentWillMount() {
        this.getTags();
    }
*/
  
    return (
        

        <Form onSubmit = {sendAd}>
            {console.log(tags)};
            <Input type='text'
                    name="name"
                    placeholder="ad name. Kep it under 20chars"
                    maxLength="20"
                    required
                />
            <Input type="number"
                    name="price"
                    min="1"
                    max="1000000"
                    required
                />
            <Input type="text"
                    name="description"
                    maxLength="286"
                    placeholder="add a brief description of the item"
                    required
                />
            <Select name="tag"
                    options={tags}
                />
            <Select name="type"
                    options={["sell", "buy"]}
                />
            <Input type="text"
                    name="photo"
                    maxLength="286"
                    placeholder="please insert your pic´s URL"
                    required
                />        
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}