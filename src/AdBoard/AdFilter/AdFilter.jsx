import React, { Component } from "react";
import { getTags } from "../../api_caller";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";
import { Dropdown, DropdownButton, Form, Button } from "react-bootstrap";

export default class AdFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: sessionStorage.getItem("search") ? sessionStorage.getItem("search") : "",
      params: {
        name: sessionStorage.getItem("name"),
        minPrice: sessionStorage.getItem("minPrice") ? sessionStorage.getItem("minPrice") : "",
        maxPrice: sessionStorage.getItem("maxPrice") ? sessionStorage.getItem("maxPrice") : "",
        venta: sessionStorage.getItem("venta"),
        tag: sessionStorage.getItem("tag")
      },
      tags: []
    };
  }

  handleChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      params: { ...this.state.params, [name]: value }
    });
    sessionStorage.setItem(name, value);
  };

  sendQuery = event => {
    event.preventDefault();
    const maxPrice = this.state.params.maxPrice;
    const minPrice = this.state.params.minPrice;
    const name = this.state.params.name;
    const tag = this.state.params.tag;
    const venta = this.state.params.venta;

    let queryParams = ``;

    if (minPrice && !maxPrice) {
      queryParams = queryParams + `&price=${minPrice}-${this.props.maxPrice}`;
    } else if (!minPrice && maxPrice) {
      queryParams = queryParams + `&price=0-${maxPrice}`;
    } else if (minPrice && maxPrice) {
      queryParams = queryParams + `&price=${minPrice}-${maxPrice}`;
    }

    if (name) { queryParams = queryParams + `&name=${name}` };
    if (tag) { queryParams = queryParams + `&tag=${tag}` };
    if (venta) { queryParams = queryParams + `&venta=${venta}` };

    //this.setState({ query: queryParams });
    this.props.props.history.push(`/anuncios?${queryParams}`);
    sessionStorage.setItem("search", queryParams);

    this.props.getAds(queryParams);
  };

  clearFilter = () => {
    this.setState({
      params: {
        ...this.state.params,
        name: "",
        minPrice: "",
        maxPrice: "",
        venta: "",
        tag: ""
      }
    });
    Object.keys(sessionStorage).forEach(key => sessionStorage.removeItem(key));
  };

  render() {

    return (
      <div className="form-container">

        <form onSubmit={this.sendQuery}>
          <label htmlFor="name">See what you've got</label>
          <input type="text"
            placeholder="insert item"
            value={this.state.params.name}
            name="name"
            onChange={this.handleChange} />
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
          <label htmlFor="venta">Type of ad</label>
          <select name="venta"
            onChange={this.handleChange}
            value={this.state.params.venta}>
            <option value="" defaultValue>Todos</option>
            <option value="true" >Venta</option>
            <option value="false">Compra</option>
          </select>
          <label htmlFor="tag">Tag</label>
          <select name="tag"
            onChange={this.handleChange}
            value={this.state.params.tag}> Filter by Tags
             {this.props.tags.map((item, index) => {
              if (item !== null) {
                return (
                  <option key={index} value={item}>{item}</option>
                )
              } else {
                return <option key={index} value="">All</option>
              }
            })}

          </select>
          <div>
            <Button type="submit" variant="primary">SEND</Button>
            <Button onClick={this.clearFilter} variant="secondary" > Clear</Button>
          </div>

        </form>
      </div>
    );
  }
}
