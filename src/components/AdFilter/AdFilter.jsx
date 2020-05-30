import React, { Component } from "react";
import T from 'prop-types';
import { Button } from "react-bootstrap";
import {Form, Input, Select, Clear} from '../FormProvider/FormProvider';

export default class AdFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: sessionStorage.getItem("search") ? sessionStorage.getItem("search") : "",
      params: {
        name: "",
        minPrice: "",
        maxPrice: "",
        type: "",
        tag: "",
      }
    };
  }

  sendQuery = data => {

    let queryParams = ``;

    if (data.minPrice && !data.maxPrice) {
      queryParams = queryParams + `&price=${data.minPrice}-${this.props.maxPrice}`;
    } else if (!data.minPrice && data.maxPrice) {
      queryParams = queryParams + `&price=0-${data.maxPrice}`;
    } else if (data.minPrice && data.maxPrice) {
      queryParams = queryParams + `&price=${data.minPrice}-${data.maxPrice}`;
    }

    if (data.name) { queryParams = queryParams + `&name=${data.name}` };
    if (data.tag) { queryParams = queryParams + `&tag=${data.tag}` };
    if (data.type) { queryParams = queryParams + `&venta=${"sell" ? true : false}` };

    this.props.fetchAds(queryParams);
  };

  render() {
    return (
      <div className="form-container">

        <Form onSubmit={this.sendQuery} initialState={this.state.params}>
          <Input 
            name="name"
            type="text"
            placeholder="insert item"
            />
            <div>
              <Input type="number"
                name="minPrice"/>
              <Input type="number"
                name="maxPrice" />
            </div>
          <Select 
            name="Type"
            options={["sell", "buy"]}
            defaultOption= "sell"/>
          <Select name="tag"
            options={["", ...this.props.tags]} 
            defaultOption = ""/>
            <div>
              <Button type="submit" variant="primary">SEND</Button>
              <Clear message="clear" variant="secondary" /> 
            </div>
        </Form>
      </div>
    );
  }
}

AdFilter.propTypes = {
  fetchAds: T.func.isRequired
}


function temp () {
  return (
      <>
      <div className="form-container">

        <form onSubmit={this.sendQuery}>
          <label htmlFor="name">Ad name (title) </label>
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
            value={this.props.tags}> Filter by Tags
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
      </>
  );
}