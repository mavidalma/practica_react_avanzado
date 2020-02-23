import React, { Component } from 'react';
import { fetchAds } from '../api_caller';
import './AdBoard.css';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import adDetail from '../adDetail/adDetail';


export default class AdBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            query: sessionStorage.getItem('search'),
            data: [],
            params: {
                name: sessionStorage.getItem('name'),
                minPrice: sessionStorage.getItem('minPrice'),
                maxPrice: sessionStorage.getItem('maxPrice') === 0 ? 100000 : sessionStorage.getItem('maxPrice'),
                venta: sessionStorage.getItem('venta'),
                tag:"",
            }
        }
    }

    getAds = (query) => {
        fetchAds(query)
            .then(data => this.setState({ data: data }));

    }

    componentWillMount() {
        this.getAds(this.state.query)
    }


    handleChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            params:{...this.state.params, [name]: value}
        })
        sessionStorage.setItem(name,value);
    }

    sendQuery = event => {
        event.preventDefault();

        let queryParams =`price=${this.state.params.minPrice}-${this.state.params.maxPrice}&venta=${this.state.params.venta}`;
        if(this.state.params.name) {queryParams = queryParams + `&name=${this.state.params.name}`}
    
        this.setState({query: queryParams});
        this.props.history.push(`/anuncios?${queryParams}`);
        sessionStorage.setItem("search", queryParams);

        this.getAds(queryParams);


    }

    render() {

        console.log(this.state.params)

        return (
            // <FilterBar data={this.state.data}/> --> convertirlo en componente de filtro
            <div>
                <form onSubmit={this.sendQuery}>
                    <input type="text"
                        placeholder="insert item"
                        value= {this.state.params.name}
                        name="name"
                        onChange={this.handleChange} />
                    <label htmlFor="name">See what you've got</label>

                    <div>
                        <label htmlFor="min-price">min price</label>
                        <input type="number"
                            onChange={this.handleChange}
                            name="minPrice" 
                            value = {sessionStorage.getItem("minPrice")}/>
                        <label htmlFor="max-price">max price</label>
                        <input type="number"
                            onChange={this.handleChange}
                            name="maxPrice" 
                            value= {sessionStorage.getItem("maxPrice")}/>
                    </div>
                    <select name="venta"
                            onChange={this.handleChange}
                            value={sessionStorage.getItem("venta")}>

                        <option value="true" defaultValue>Venta</option>
                        <option value="false">Compra</option>
                    </select>
                
                    <button type="submit">SEND</button>

                </form>

                <div className="ads-wall">{this.state.data.map(card => {
                    return ( //turn this into conditional rendering, either this component or "NO ITEMS"
                        <div key={card._id}
                            className="card-container"
                            onClick={this.handleClick}>
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