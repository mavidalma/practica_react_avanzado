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
            type: "sell",
            photo: "",
            tagArray: [],
        };
    };

    sendAd = event => {
        event.preventDefault();

        createAdvertisement(
            this.state.name,
            this.state.price,
            this.state.description,
            this.state.tags,
            this.state.type,
            this.state.photo)
            .then(data => data? this.props.history.push("/anuncios") : console.log(data));
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

    componentWillMount() {
        this.getTags();
    }


    render() {

        console.log(this.state)

        return (
            <form onSubmit={this.sendAd}>
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
                    min="1"
                    max="1000000"
                    onChange={this.handleChange}
                    required
                />
                <label htmlFor="description">item's description</label>
                <input type="text"
                    name="description"
                    onChange={this.handleChange}
                    maxLength="286"
                    placeholder="add a brief description of the item"
                    required
                />
                <select name="tag"
                    onChange={this.handleChange}> Add a tag!!!!!!!!!!!
                        {this.state.tagArray.map(item => {
                        if (item !== null) {
                            return (
                                <option value={item}>{item}</option>
                            )
                        }
                    })}

                </select>
                <select name="type"
                        onChange={this.handleChange}
                        value={this.state.venta}> choose your ad´s type
                        <option value="sell" defaultValue>Venta</option>
                        <option value="buy">Compra</option>
                    </select>
                <input type="text"
                    name="photo"
                    onChange={this.handleChange}
                    maxLength="286"
                    placeholder="please insert your pic´s URL"
                    required
                />

                <button type="submit"> Create ad</button>

            </form>

        )
    }
}

