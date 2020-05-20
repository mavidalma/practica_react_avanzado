import React, { Component } from 'react';
import { fetchAds, getTags } from '../../api_caller';
import './AdBoard.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import AdFilter from '../AdFilter';
import AdCard from '../AdCard/AdCard';
import { ads } from '../../store/reducers';

/*
export default function AdBoard ({ads}) {
    console.log(ads)
    return (
        <div>
        <AdFilter data={ads}
            getAds={this.getAds}
            tags={this.state.tags}
            maxPrice = {this.state.maxPrice}
            props={this.props}
    />
        <div className="ads-wall">{ads.map(card => {
            return (
                < div key={card._id} className="card-container">
                    <AdCard ad={card} />
                </div>
            )
        })}
        </div>
    </div>
    )
}*/

export default class AdBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maxPrice: 100000000,
        }
    }

    getAds = async(query) => {
       await fetchAds(query)
            .then(data => {
                this.setState({success: data.success});
                this.setState({error: data.error});
                this.setState({data: data.results})
            });
      //  this.getMaxPrice(this.state.data);
    }

    getMaxPrice = (data) => {
        const topPrice = data.map(item => item.price)
            .reduce((previous, current) => (current > previous) ? current : previous);
        this.setState({
            maxPrice: topPrice,
        })
    }

    componentDidMount() {
        this.props.getUserFromStorage();
        this.props.fetchAds();
        this.props.fetchTags();
    }

    render() {
  
        if(this.props.user){
        return (
            <div>
                <AdFilter 
                    tags={this.props.tags}
                    maxPrice = {this.state.maxPrice}
                    props={this.props}
                />
                <div className="ads-wall">{this.props.ads.map(card => {
                    return (
                        < div key={card._id} className="card-container">
                            <AdCard ad={card} />
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