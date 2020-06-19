import React, { useEffect } from 'react';
import T from 'prop-types';
import { createAdvertisement } from '../../api_caller';
import { Form, Input, Select, Clear } from '../FormProvider/FormProvider';
import { Button } from "react-bootstrap";

export default function CreateAd ({tags, fetchTags, ...props}) {

    const initialState = {
        title: "",
        price: "",
        description: "",
        type: "sell",
        city: "",
        tag: "",
    };

    const sendAd = (data, files) => {
        console.log( "on createAd sendAD: ", data, files);
        const type= data.type === "sell" ? true : false;

        createAdvertisement(
            data.title,
            data.price,
            data.description,
            data.tag,
            type,
            data.city,
            files.cover || "",
            files.pictures || [])
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

        <Form onSubmit = {sendAd} initialState={initialState} >
            {console.log(tags)}
            <Input  type='text'
                    name="title"
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
                />
            <Input type="text"
                    name="tag"
                    maxLength="40"
                    placeholder="choose one keyword"
                />
            <Input type="text"
                    name="city"
                    maxLength="40"
                />
            <Select name="type"
                    options={["sell", "buy"]}
                    defaultOption="sell"
                />
            <Input type="file"
                    name="cover"
                    accept="image/png, image/jpeg" 
                />  
            <Input type="file"
                    name="pictures"
                    accept="image/png, image/jpeg"
                    multiple 
                />    
            <Button variant="primary" type="submit"> Submit </Button>
            <Clear message="clear form" variant="outline-primary" /> 
        </Form>
        </>
    )
}

CreateAd.propTypes = {
    tags: T.array.isRequired,
    fetchTags: T.func.isRequired,
}