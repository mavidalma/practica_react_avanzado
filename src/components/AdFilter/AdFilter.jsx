import React, { Component } from "react";
import T from 'prop-types';
import { Button } from "react-bootstrap";
import {Form, Input, Select, Clear} from '../FormProvider/FormProvider';

export default function AdFilter ({fetchAds, tags, ...props}) {
  const initialState = {
        name: "",
        minPrice: "",
        maxPrice: "",
        type: "sell",
        tag: "",
    };

 const sendQuery = data => {

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

    fetchAds(queryParams);
  };

    return (
      <div className="form-container">

        <Form onSubmit={sendQuery} initialState={initialState}>
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
            name="type"
            options={["sell", "buy"]}
            defaultOption= "sell"/>
          <Select name="tag"
            options={["", ...tags]} 
            defaultOption = ""/>
            <div>
              <Button type="submit" variant="primary">SEND</Button>
              <Clear message="clear" variant="secondary" /> 
            </div>
        </Form>
      </div>
    );
  };

AdFilter.propTypes = {
  fetchAds: T.func.isRequired,
  tags: T.array.isRequired
}