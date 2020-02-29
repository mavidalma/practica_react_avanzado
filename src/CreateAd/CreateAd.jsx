import React, { Component } from 'react';
import { createAdvertisement, getTags } from '../api_caller';
import AdForm from "../AdForm/AdForm"

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
         
        return (
            <AdForm handleChange = {this.handleChange}
                    tagArray={this.state.tagArray}
                    venta = {this.state.venta}
                    send = {this.sendAd}/>
        )
    }
}

