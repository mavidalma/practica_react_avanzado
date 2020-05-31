import React from 'react';
import { editAd } from '../../api_caller';
import { Button } from "react-bootstrap";
import { Form, Input, Select, Clear} from '../FormProvider/FormProvider';
import T from 'prop-types';

export default function EditAd ({ad, tags, closeEditor, fetchAd, ...props}) {
    
    const initialState = {
        name: ad.name,
        price: ad.price,
        description: ad.description,
        tags: ad.tags[0],
        type: ad.type,
        photo: ad.photo,
    }

    const sendEdition = async data => {

        await editAd(
            ad._id,
            data.name,
            data.price,
            data.description,
            data.tags,
            data.type,
            data.photo)
            .then(data => console.log(data));
            
        fetchAd(ad._id);
        closeEditor();
    }
    console.log(tags)

    return(
        <Form onSubmit = { sendEdition } initialState={initialState} >
         
            <Input name="name"
                   type='text'
                   placeholder="ad name. Kep it under 20chars"
                   maxLength="20"
            />

            <Input type="number"
                   name="price"
                />
            <Input type="text"
                   name="description"
                   maxLength="286"
                   placeholder="add a brief description of the item"
                />
            <Select name="tag"
                    options={tags}
                    defaultOption={ad.tags}
                />
            <Input type="text"
                    name="photo"
                    maxLength="286"
                    placeholder="please insert your pic´s URL"
                />
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