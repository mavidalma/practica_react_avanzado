import React, { Component } from 'react';
import { fetchSingleAd } from '../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

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

        return (
            <div>
                <h1>hello!</h1>
            </div>
        )
    }
}

