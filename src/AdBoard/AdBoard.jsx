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

    getAds = (query) => {
        fetchAds(query)
            .then(data => {
                this.setState({success: data.success});
                console.log("data.succes setted")
                this.setState({error: data.error});
                console.log("data.error setted")
                this.setState({data: data.results})
                console.log("data setted")
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
        console.log("componentdidmount")
    }

    render() {
        
        console.log("render success    " + this.state.success)
        console.log("render error   " + this.state.error)
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
                    return (
                        < div key={card._id} className="card-container">
                            <AdCard data={card} />
                        </div>
                    )
                })}
                </div>
            </div>
        )
    } else { //I tried to use a conditional (this.state.error === "Error: not logged in") {} but since it first renders an empty version of the app, it doesn work
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