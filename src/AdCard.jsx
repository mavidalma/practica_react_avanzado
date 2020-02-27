import React, { Component } from 'react';
import ReactImageFallback from "react-image-fallback";
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import fallbackPic from './resources/img-not-found.png';
import { Card, Button } from 'react-bootstrap';

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
            /* 
                        <Card style={{ width: '18rem', height:"25rem", margin: '10px'}}>
                           <div className="img-container"> <Card.Img variant="top" src={data.photo} /> </div>
                            <Card.Body>
                            <Link to={`/anuncios/${data._id}`}><Card.Title>{data.e}</Card.Title></Link>
                                <Card.Text>
                                <p><span>Price:</span> {data.price}€</p>
                                <p><span>description:</span> {data.description}</p>
                                <p><span>type:</span> {data.type}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>*/

        )
    }
}