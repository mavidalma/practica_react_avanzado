import React, { Component } from 'react';
import ReactImageFallback from "react-image-fallback";
import { BrowserRouter as Router, Link } from "react-router-dom";
import fallbackPic from '../../resources/img-not-found.png';


export default class AdCard extends Component {


    render() {

        const data = this.props.data;

        return (
            <>
                <div className="ad">
                    <div className="info">
                        <Link to={`/anuncios/${data._id}`}><h2>{data.name}</h2></Link>
                        <div className="data">
                            <p><span>Price:</span> {data.price}€</p>
                            <p><span>description:</span> {data.description}</p>
                            <p><span>type:</span> {data.type}</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <ReactImageFallback src={data.photo} fallbackImage={fallbackPic} className="image" />
                    </div>

                </div>
            </>
        )
    }
}