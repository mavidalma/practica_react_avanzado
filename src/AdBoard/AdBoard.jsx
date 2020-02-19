import React, { Component } from 'react';
import { fetchAds } from '../api_caller';
//import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

export default class AdBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            data: []
        }
    }

    getAds = () => {
         fetchAds(this.state.query)
            .then(data => this.setState({data: data}));

    }

    componentWillMount() {
        //esto para cuando tenga que hacer queryparams
        this.setState({
            query: this.props.match.params 
        })
        
        this.getAds();
    }


    render() {
        console.log(this.state.data)
        const one = this.state.data[0];
        console.log(one)

        
       
        return (
            <div>
                <button> click!</button>
            </div>


        )
    }
}