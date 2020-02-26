import React, { Component } from 'react';
import ReactImageFallback from "react-image-fallback";
import '../detail.css';
import fallbackPic from '../../resources/img-not-found.png'

export default class AdCard extends Component {


    render() {

        const data = this.props.data;
        return (
            // Meter un conditional render según editmode sea true or false
            <>
                <div className="ad">
                    <p>{data.price}€</p>
                    <p>description: {data.description}</p>
                    <p>type: {data.type}</p>
                    <ReactImageFallback src={data.photo} fallbackImage={fallbackPic} className="image" />
                </div>
            </>

        )
    }
}