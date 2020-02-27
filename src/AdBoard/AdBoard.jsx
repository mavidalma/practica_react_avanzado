import React, { Component } from 'react';
import { fetchAds, getTags } from '../api_caller';
import './AdBoard.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import AdFilter from './AdFilter/AdFilter';
import AdCard from '../AdCard';
//import {Tags} from './Tags/Tags'


export default class AdBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tags: [],
        }
    }

    getAds = (query) => {
        fetchAds(query)
            .then(data => this.setState({ data: data }));
    }

    getMaxPrice(data) {
        return data.map(item => item.price).reduce((previous, current) => (current > previous) ? current : previous)
    }

    componentWillMount() {
        this.getAds(this.state.query);

    }

    render() {
        //  (this.state.data.length > 0) ? console.log(this.getMaxPrice(this.state.data)) : console.log("no data")

        return (
            <div>
                <AdFilter data={this.state.data}
                          getAds={this.getAds} 
                          props={this.props}
                />
                <div className="ads-wall">{this.state.data.map(card => {
                    return ( //turn this into conditional rendering, either this component or "NO ITEMS"
                        < div key={card._id} className="card-container">
                            <AdCard data = {card}/>
                        </div>
                    )
                })}
                </div>
            </div>

        )
    }
}