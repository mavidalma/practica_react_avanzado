import React, { Component } from 'react';
import { fetchAds } from '../api_caller';
import './AdBoard.css';
//import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

export default class AdBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            data: [],
        }
    }

    getAds = (query) => {
        fetchAds(query)
            .then(data => this.setState({ data: data }));

    }
/*
    componentDidMount() {
        //esto para cuando tenga que hacer queryparams
        console.log(this.state.query)
        this.setState({
            query: this.props.match.path
        });
  
        console.log(this.props.match.path)
        console.log(this.state.query)

        this.getAds();
    }*/

    componentDidMount() {
        console.log(this.state.query)
        this.getAds(this.state.query);  
    } 

    handleClick = () => {
      
      this.setState({
            query: Math.random().toString(),
        });
    }

    render() {
        console.log(this.state.data)
        console.log(this.state.query)


        return (
            // <FilterBar data={this.state.data}/> --> componente de filtro
            <div>
                <button onClick={this.handleClick}> click!</button>
                <div className="ads-wall">{this.state.data.map(card => {
                    return (
                        <div key={card._id}
                            className="card-container"
                            onClick={this.handleClick}>
                            <h2>{card.name}</h2>
                            <p>{card.price}€</p>
                            <p>description: {card.description}</p>
                            <p>type: {card.type}</p>

                        </div>

                    )})}
                </div>
            </div>


        )
    }
}