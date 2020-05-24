import React, { Component } from 'react';
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from 'styled-components'



const Form = styled.form `
    margin-top: 15px;
    margin-left: 15px;
    
    > input, select {
        margin-botoom: 10px;
    };

    > Button {
        width: 150px;
    }
`
export default class AdForm extends Component {
    
    render() {
        return (
            <>
                <Form onSubmit={this.props.send}>
                    <label htmlFor="name">Ad name</label>
                    <input type='text'
                        name="name"
                        onChange={this.props.handleChange}
                        placeholder="ad name. Kep it under 20chars"
                        maxLength="20"
                        required
                    />
                    <label htmlFor="price">item's price</label>
                    <input type="number"
                        name="price"
                        min="1"
                        max="1000000"
                        onChange={this.props.handleChange}
                        required
                    />
                    <label htmlFor="description">item's description</label>
                    <input type="text"
                        name="description"
                        onChange={this.props.handleChange}
                        maxLength="286"
                        placeholder="add a brief description of the item"
                        required
                    />
                    <label htmlFor="tag">Ad tag</label>
                    <select name="tag"
                        onChange={this.props.handleChange}>
                        {this.props.tagArray.map(item => {
                            if (item !== null) {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            }
                        })}

                    </select>
                    <label htmlFor="type">Ad type</label>
                    <select name="type"
                        onChange={this.props.handleChange}
                        value={this.props.venta}> choose your ad´s type
                        <option value="sell" defaultValue>Venta</option>
                        <option value="buy">Compra</option>
                    </select>
                    <label htmlFor="photo">Ad picture (please paste an URL)</label>
                    <input type="text"
                        name="photo"
                        onChange={this.props.handleChange}
                        maxLength="286"
                        placeholder="please insert your pic´s URL"
                        required
                    />

                    <Button type="submit" variant="primary"> Create ad</Button>
                    <Link to="/anuncios"><Button variant="outline-primary"> return to ad Board</Button> </Link>

                </Form>
            </>


        )
    }
}