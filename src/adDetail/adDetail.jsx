import React, { Component } from 'react';
import { fetchSingleAd } from '../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import './detail.css';

export default class adDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
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
            <>
            <Link to={`/anuncios/`}><p>Return to Ad Board</p></Link>
            <div className="ad">
                        <p>{data.price}€</p>
                        <p>description: {data.description}</p>
                        <p>type: {data.type}</p>
            </div>
            </>
        )
    }
}

