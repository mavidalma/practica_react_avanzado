import React, { Component } from 'react';
import { fetchSingleAd } from '../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";
import './detail.css';
import fallbackPic from '../resources/img-not-found.png'
import EditAd from './EditAd/EditAd';

export default class adDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            editMode: false,
        }
    }

    getAd = (query) => {
        fetchSingleAd(query)
            .then(data => this.setState({ data: data }));

    }

    componentWillMount() {
            this.getAd(this.props.match.params.id)
        }

    render() {
        console.log(this.state.data)
        const data = this.state.data;
        return (
            // Meter un conditional render según editmode sea true or false
            <>
            <Link to={`/anuncios/`}><p>Return to Ad Board</p></Link>
            <div className="ad">
                        <p>{data.price}€</p>
                        <p>description: {data.description}</p>
                        <p>type: {data.type}</p>
                        <ReactImageFallback src={data.photo} fallbackImage = {fallbackPic} className="image" />
            </div>
            <EditAd ad={this.state.data} method={this.getAd}/>
            </>
        )
    }
}

