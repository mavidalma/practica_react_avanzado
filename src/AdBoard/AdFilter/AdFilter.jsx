import React, { Component } from 'react';
import { getTags } from '../../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import { Dropdown, DropdownButton, Form } from 'react-bootstrap'

export default class AdFilter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: sessionStorage.getItem('search') ? sessionStorage.getItem('search') : "",
            params: {
                name: sessionStorage.getItem('name'),
                minPrice: sessionStorage.getItem('minPrice') ? sessionStorage.getItem('minPrice') : 0,
                maxPrice: sessionStorage.getItem('maxPrice') ? sessionStorage.getItem('maxPrice') : 100000,
                venta: sessionStorage.getItem('venta'),
                tag: sessionStorage.getItem('tag'),
            },
            tags: [],
        }
    }

    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            params: { ...this.state.params, [name]: value }
        })
        sessionStorage.setItem(name, value);
    }

    sendQuery = event => {
        event.preventDefault();

        let queryParams = `price=${this.state.params.minPrice}-${this.state.params.maxPrice}`;

        if (this.state.params.name) { queryParams = queryParams + `&name=${this.state.params.name}` }
        if (this.state.params.tag) { queryParams = queryParams + `&tag=${this.state.params.tag}` }
        if (this.state.params.venta) { queryParams = queryParams + `&venta=${this.state.params.venta}` }

        //this.setState({ query: queryParams });
        this.props.props.history.push(`/anuncios?${queryParams}`);
        sessionStorage.setItem("search", queryParams);

        this.props.getAds(queryParams);
    }

    getTags = () => {
        getTags()
            .then(data => this.setState({ tags: data }));
        //.then(data => this.setState({ params: { ...this.state.params, tags: data }}))
    }
    componentWillMount() {

        this.getTags();
    }

    clearFilter = () => {
        this.setState({
            params: {
                ...this.state.params,
                name: "",
                minPrice: 0,
                maxPrice: 100000,
                venta: "",
                tag: "",
            }
        })
        Object.keys(sessionStorage).forEach(key => sessionStorage.removeItem(key));
    }

    render() {

        return (
/*
            <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>*/
            <form onSubmit={this.sendQuery}>
                <input type="text"
                    placeholder="insert item"
                    value={this.state.params.name}
                    name="name"
                    onChange={this.handleChange} />
                <label htmlFor="name">See what you've got</label>

                <div>
                    <label htmlFor="min-price">min price</label>
                    <input type="number"
                        onChange={this.handleChange}
                        name="minPrice"
                        value={this.state.params.minPrice} />
                    <label htmlFor="max-price">max price</label>
                    <input type="number"
                        onChange={this.handleChange}
                        name="maxPrice"
                        value={this.state.params.maxPrice} />
                </div>
                <select name="venta"
                    onChange={this.handleChange}
                    value={this.state.params.venta}>
                    <option value="" defaultValue>Todos</option>
                    <option value="true" >Venta</option>
                    <option value="false">Compra</option>
                </select>
                <select name="tag"
                    onChange={this.handleChange}
                    value={this.state.params.tag}> Filter by Tags
                        {this.state.tags.map((item, index) => {
                        if (item !== null) {
                            return (
                                <option key={index} value={item}>{item}</option>
                            )
                        } else {
                            return <option key={index}value="">All</option>
                        }
                    })}

                </select>

              {/*  <DropdownButton id="dropdown-basic-button" 
                                title="Tags" 
                                name="tag"
                                onChange={this.handleChange}
                                value={this.state.params.tag}>     
                        {this.state.tags.map(item => {
                        if (item !== null) {
                            return (
                                <Dropdown.Item value={item}>{item}</Dropdown.Item>
                            )
                        } else {
                            return <Dropdown.Item value="">All</Dropdown.Item>
                        }
                    })} 
                </DropdownButton> */} 


                <button type="submit">SEND</button>
                <button onClick={this.clearFilter}> Clear</button>
            </form>
        )
    }
}
