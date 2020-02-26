import React, { Component } from 'react';
import { fetchAds, getTags } from '../api_caller';
import './AdBoard.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import adDetail from '../adDetail/adDetail';
//import {Tags} from './Tags/Tags'


export default class AdBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: sessionStorage.getItem('search') ? sessionStorage.getItem('search') : "",
            data: [],
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

    getAds = (query) => {
        fetchAds(query)
            .then(data => this.setState({ data: data }));

    }

    getTags = () => {
        getTags()
            .then(data => this.setState({ tags: data }));
        //.then(data => this.setState({ params: { ...this.state.params, tags: data }}))
    }

    getMaxPrice (data) {
        return data.map(item => item.price).reduce((previous, current) => (current > previous) ? current : previous)
    }

    componentWillMount() {
        this.getAds(this.state.query);
        this.getTags();
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
        this.props.history.push(`/anuncios?${queryParams}`);
        sessionStorage.setItem("search", queryParams);

        this.getAds(queryParams);
    }

    clearFilter = () => {
        this.setState({
            params: { ...this.state.params,
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
     //  (this.state.data.length > 0) ? console.log(this.getMaxPrice(this.state.data)) : console.log("no data")



        return (
            // <FilterBar data={this.state.data}/> --> convertirlo en componente de filtro
            <div>
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
                        {this.state.tags.map(item => {
                            if (item !== null) {
                                return (
                                    <option value={item}>{item}</option>
                                )
                            } else {
                                return <option value="">All</option>
                            }
                        })}

                    </select>
                    <button type="submit">SEND</button>
                    <button onClick={this.clearFilter}> Clear</button>
                </form>
                
                <Link to="/create"><div>Crear anuncio</div></Link>

                <div className="ads-wall">{this.state.data.map(card => {
                    return ( //turn this into conditional rendering, either this component or "NO ITEMS"
                        <div key={card._id} className="card-container">
                            <Link to={`/anuncios/${card._id}`}><h2>{card.name}</h2></Link>
                            <p>{card.price}€</p>
                            <p>description: {card.description}</p>
                            <p>type: {card.type}</p>
                        </div>

                    )
                })}
                </div>
                {/* <Route path={`/anuncios/:id`} component={adDetail}/> */}
            </div>

        )
    }
}