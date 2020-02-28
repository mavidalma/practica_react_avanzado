import React, { Component } from 'react';
import { fetchAds, getTags } from '../api_caller';
import './AdBoard.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import AdFilter from './AdFilter/AdFilter';
import AdCard from '../AdCard';


export default class AdBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            tags: [],
           // maxPrice: 0,
        }
    }

    getAds = async (query) => {
        await fetchAds(query)
            .then(data => this.setState({data: data}));

        /*        const adsList = await fetchAds(query)
            .then(data => data);
        this.setState({
            data: adsList
        });
        return adsList*/
    }
    getTags = async () => {
        await getTags()
            .then(data => this.setState({ tags: data }));
        //.then(data => this.setState({ params: { ...this.state.params, tags: data }}))
    }

    getMaxPrice = (data) => {
        return data.map(item => item.price)
            .reduce((previous, current) => (current > previous) ? current : previous)
    }

    componentDidMount() {
        this.getAds(this.state.query);
        this.getTags();
    }

    render() {
        return (
            <div>
                <AdFilter data={this.state.data}
                    getAds={this.getAds}
                    tags={this.state.tags}
                    props={this.props}
                   // maxPrice = {this.state.maxPrice}
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