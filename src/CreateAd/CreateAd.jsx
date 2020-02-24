import React, { Component } from 'react';
import { createAdvertisement, getTags } from '../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";

export default class CreateAd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            price: 0,
            description: "",
            tags: [],
            type: "",
            photo: "",
            tagArray: [],
        };
    };

    sendAd = event =>{
        event.preventDefault();

        createAdvertisement(
            this.state.name, 
            this.state.price, 
            this.state.description, 
            this.state.tags, 
            this.state.type,
            this.state.photo)
            .then(data => console.log(data));
    }

    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
             [name]: value
        })
    }

    getTags = () => {
        getTags()
            .then(data => this.setState({ tagArray: data }));
    }


    render() {

        console.log(this.state.tagArray);

        return (
            <form >
                <label htmlFor="name">Ad name</label>
                <input type='text'
                       name="name"
                       onChange={this.handleChange}
                       placeholder="ad name. Kep it under 20chars"
                       maxLength="20"
                       required
                />
                <label htmlFor="price">item's price</label>
                <input type="number"
                       name="price"
                       onChange={this.handleChange}
                       required
                />
                <label htmlFor="description">item's description</label>
                <input type="text"
                       name="description"
                       onChange={this.handleChange}
                       maxLength="286"
                       placeholder= "add a brief description of the item"
                       required
                />
                <input type="chekbox"
                       onChange={this.handleChange}
                />
    

                <button type="submit"> Create ad</button>

            </form>
        
        )
    }
}

