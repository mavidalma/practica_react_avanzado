import React from 'react';
import { editAd } from '../../api_caller';
import { Button } from "react-bootstrap";
import { Form, Input, Select, Clear} from '../FormProvider/FormProvider';
import T from 'prop-types';

export default function EditAd ({ad, tags, closeEditor, fetchAd, ...props}) {
    
    const initialState = {
        title: ad.title,
        price: ad.price,
        description: ad.description,
        tag: ad.tags,
        type: ad.type || true,
        city: ad.city,
    }

    const sendEdition = async data => {
        console.log("original ad on editAd: ", ad);
        console.log(" edited ad on senEdition: ", data);
        const type= data.type === "sell" ? true : false;


       await editAd(
            ad._id,
            data.title,
            data.price,
            data.description,
            data.tag,
            type,
            data.city)
            .then(data => console.log(data));
            
        fetchAd(ad._id);
        closeEditor();
    }
    console.log(tags)

    return(
        <Form onSubmit = { sendEdition } initialState={initialState} >
         
            <Input name="title"
                   type='text'
                   placeholder="ad name. Kep it under 20chars"
                   maxLength="20"
            />

            <Input type="number"
                   name="price"
                   min="1"
                   max="1000000"
                />
            <Input type="text"
                   name="description"
                   maxLength="286"
                   placeholder="add a brief description of the item"
                />
            <Input name="tag"
                    maxLength="40"
                    placeholder= {ad.tags}
                />
            <Input name="city"
                    maxLength="40"
                    placeholder= {ad.city}
                />
            <Select name="type"
                    options={["sell", "buy"]}
                    defaultOption="sell"
                />
           {/*} <Input type="file"
                    name="cover"
                    accept="image/png, image/jpeg" 
                />
            <Input type="file"
                    name="pictures"
                    accept="image/png, image/jpeg"
                    multiple 
    />   */}
            <Button type="submit" variant="primary"> Send Edit</Button>
            <Clear message="return to original" variant="outline-primary" /> 
        </Form >
        )
    }

EditAd.propTypes = {
    ad: T.object.isRequired,
    fetchAd: T.func.isRequired,
    closeEditor: T.func.isRequired,
    tags: T.array.isRequired
}