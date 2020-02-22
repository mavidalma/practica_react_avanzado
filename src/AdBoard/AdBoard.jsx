import React, { Component } from 'react';
import { fetchAds } from '../api_caller';
import './AdBoard.css';
import styled, { css } from 'styled-components'
//import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

const array = [];

export default class AdBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: "",
            data: [],
            params: {
                name:"",
                minPrice: 0,
                maxPrice: 1000000,
                venta:true,
                tag:"",
            }
        }
    }

    getAds = () => {
        fetchAds(this.state.query)
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
        this.getAds();
    }


    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            params:{...this.state.params, [name]: value}
        })
    }

    sendQuery=event=>{
        event.preventDefault();
        const queryParams =`name=${this.state.params.name}&price=${this.state.params.minPrice}-${this.state.params.maxPrice}&venta=${this.state.params.venta}&tag=${this.state.params.tag}`;
        array.push(queryParams);
        this.setState({query: queryParams});
        this.props.history.push(`/anuncios/${queryParams}`);

    }

    render() {
        console.log(this.state.data)
        console.log(this.state.params)
        console.log(this.props.match.params)
        console.log(this.props.match.path)
        console.log(array)


        return (
            // <FilterBar data={this.state.data}/> --> componente de filtro
            <div>
                <form onSubmit={this.sendQuery}>
                    <input type="text"
                        placeholder="type your search"
                        name="name"
                        onChange={this.handleChange} />
                    <label htmlfor="name">See what you've got</label>

                    <div>
                        <label for="min-price">min price</label>
                        <input type="number"
                            onChange={this.handleChange}
                            name="minPrice" />
                        <label htmlfor="max-price">min price</label>
                        <input type="number"
                            onChange={this.handleChange}
                            name="maxPrice" />
                    </div>
                    <select name="venta"
                            onChange={this.handleChange}>

                        <option value="true" selected>Venta</option>
                        <option value="false">Compra</option>
                    </select>
                
                    <button type="submit">SEND</button>

                </form>

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

                    )
                })}
                </div>
                { /*   <Route path={`anuncios/:query`} component={Adboard query={this.state.query}}/> */}
            </div>

        
        )
    }
}