import React, { Component } from 'react';
import ReactImageFallback from "react-image-fallback";
import { BrowserRouter as Router, Link } from "react-router-dom";
import fallbackPic from '../../resources/img-not-found.png';
import T from 'prop-types';


export default class AdCard extends Component {


    render() {

        const ad = this.props.ad;

        return (
            <>
                <div className="ad">
                    <div className="info">
                        <Link to={`/anuncios/${ad._id}`}><h2>{ad.title}</h2></Link>
                        <div className="data">
                            <p><span>Price:</span> {ad.price}€</p>
                            <p><span>description:</span> {ad.description}</p>
                            <p><span>type:</span> {ad.type ? "sell" : "buy"}</p>
                        </div>
                    </div>
                    <div className="image-container">
                        <ReactImageFallback src={ad.cover} fallbackImage={fallbackPic} className="image" />
                    </div>

                </div>
            </>
        )
    }
}

AdCard.propTypes = {
    ad: T.object.isRequired
}