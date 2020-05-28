import React, { Component } from 'react';
import './AdBoard.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import AdFilter from '../AdFilter';
import AdCard from '../AdCard/AdCard';
import Loading from '../Loading/Loading';
import T from 'prop-types';


export default class AdBoard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            maxPrice: 100000000,
        }
    }

   /* getMaxPrice = (data) => {
        const topPrice = data.map(item => item.price)
            .reduce((previous, current) => (current > previous) ? current : previous);
        this.setState({
            maxPrice: topPrice,
        })
    }*/

    componentDidMount() {
        this.props.getUserFromStorage();
        this.props.fetchAds();
        this.props.fetchTags();
    }

    render() {
        return (
            <div>
                <AdFilter 
                    tags={this.props.tags}
                    props={this.props}
                />  
                {this.props.loading && <Loading /> }
                <AdWall ads={this.props.ads} />            
            </div>
        )

    }
}

function AdWall ({ads}) {
    return(
        <div className="ads-wall">
            {ads.map(card => {
                 return (
                < div key={card._id} className="card-container">
                    <AdCard ad={card} />
                 </div>
        )
    })}
       </div>
    )
};

AdWall.propTypes = {
    ads: T.array.isRequired
};

AdBoard.propTypes = {
    getUserFromStorage: T.func.isRequired,
    fetchAds: T.func.isRequired,
    fetchTags: T.func.isRequired,
    ads: T.array.isRequired,
    tags: T.array.isRequired,
    user: T.bool.isRequired,
    loading: T.bool.isRequired,
}