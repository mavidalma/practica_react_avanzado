import React, { Component } from 'react';
import { editAd, getTags } from '../../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";

import T from 'prop-types';

export default class EditAd extends Component {

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

    editAd = async event => {
        event.preventDefault();
        await editAd(
            this.props.ad._id,
            this.state.name,
            this.state.price,
            this.state.description,
            this.state.tags,
            this.state.type,
            this.state.photo)
            .then(data => console.log(data));
            
        this.props.props.history.push(`${this.props.ad._id}`);   
        this.props.fetchAd(this.props.props.match.params.id)
        this.props.closeEditor();
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

    componentDidMount() {
        this.getTags();
        this.setState({
            name: this.props.ad.title,
            price: this.props.ad.price,
            description: this.props.ad.description,
            tags: this.props.ad.tags,
            type: this.props.ad.type,
            photo: this.props.ad.photo,
        })
    }


    render() {

        return(
            <> 
            <form onSubmit = { this.editAd } >
                    <label htmlFor="name">Ad name</label>
                    <input type='text'
                        name="name"
                        onChange={this.handleChange}
                        placeholder="ad name. Kep it under 20chars"
                        maxLength="20"
                    />
                    <label htmlFor="price">item's price</label>
                    <input type="number"
                        name="price"
                        onChange={this.handleChange}
                    />
                    <label htmlFor="description">item's description</label>
                    <input type="text"
                        name="description"
                        onChange={this.handleChange}
                        maxLength="286"
                        placeholder="add a brief description of the item"
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
                    />

                    <Button type="submit" variant="primary"> Send Edit</Button>

            </form>
            </>
        )
    }
}

EditAd.propTypes = {
    ad: T.object.isRequired,
    fetchAd: T.func.isRequired,
    closeEditor: T.func.isRequired
}