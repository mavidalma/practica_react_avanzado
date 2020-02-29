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
            error: "",
            data: [],
            tags: [],
            success: true,
           // maxPrice: 0,
        }
    }

    getAds = async (query) => {
        await fetchAds(query)
            .then(data => {
                this.setState({success: data.success});
                this.setState({error: data.error});
                this.setState({data: data.results})
            });

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
        this.getAds("");
        this.getTags();
    }

    render() {
        
        console.log(this.state.success)
        console.log(this.state.error)
        if(this.state.success){
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
    } else { //I tried to use a conditional (this.state.error === "Error: user not found") {} but since it first renders an empty version of the app, it doesn work
        return (
                <div className="error-message">
                  <h1>Please log in</h1>
                  <h2> In order to use our patform you have to be a registered user.</h2>
                    
                  <p>Already register? <Link to="/login"><button>Go to login</button> </Link> </p>
                  <p>Want to create an account? <Link to="/register"><button>Go to register</button> </Link></p>
                </div>
              )
    }
    }
}