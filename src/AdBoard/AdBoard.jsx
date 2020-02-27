import React, { Component } from 'react';
import { fetchAds, getTags } from '../api_caller';
import './AdBoard.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import AdFilter from './AdFilter/AdFilter';
import AdCard from '../AdCard';
import NavBar from '../navBar/navBar.js';

//import {Tags} from './Tags/Tags'


export default class AdBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tags: [],
            maxPrice: 0,
        }
    }

    getAds = async (query) => {
        await fetchAds(query)
            .then(data => this.setState({ data: data }));
    }
    getTags = async() => {
        await getTags()
            .then(data => this.setState({ tags: data }));
        //.then(data => this.setState({ params: { ...this.state.params, tags: data }}))
    }

    getMaxPrice(data) {
        return data.map(item => item.price)
        .reduce((previous, current) => (current > previous) ? current : previous)
    }

    componentWillMount() {

        this.getAds(this.state.query);
        this.getTags();

        if (this.state.data.length > 0) {
            const max = this.getMaxPrice(this.state.data);
            this.setState({
                maxPrice: max,
            })
        } else {
            console.log("no data")
        }
    }

    render() {
       // (this.state.data.length > 0) ? console.log(this.getMaxPrice(this.state.data)) : console.log("no data")
       //  console.log(this.state.maxPrice)
        return (
            <div>
                <NavBar/>
                <AdFilter data={this.state.data}
                    getAds={this.getAds}
                    tags={this.state.tags}
                    props={this.props}
                />
                <div className="ads-wall">{this.state.data.map(card => {
                    return ( //turn this into conditional rendering, either this component or "NO ITEMS"
                        < div key={card._id} className="card-container">
                            <AdCard data={card} />
                        </div>
                    )
                })}
                </div>
            </div>

        )
    }
}