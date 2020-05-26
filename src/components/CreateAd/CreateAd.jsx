import React, { useState, useEffect } from 'react';
import { createAdvertisement } from '../../api_caller';
import AdForm from "../AdForm/AdForm";
import { Form, Input, Select } from '../FormProvider/FormProvider';
import { Button } from "react-bootstrap";

export default function CreateAd ({tags, fetchTags, ...props}) {

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
    
    useEffect(()=> {
        fetchTags();
    })
  
    return (
        <>
        <div classname="createAd-header">
            <h2>Create your ad</h2>
            <p>Please take into account that all fields are required</p>
        </div>

        <Form onSubmit = {sendAd}>
            {console.log(tags)}
            <Input  type='text'
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
                    defaultOption="lifestyle"
                />
            <Select name="type"
                    options={["sell", "buy"]}
                    defaultOption="sell"
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
        </>
    )
}