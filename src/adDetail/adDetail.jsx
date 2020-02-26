import React, { Component } from 'react';
import { fetchSingleAd } from '../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import ReactImageFallback from "react-image-fallback";
import './detail.css';
import fallbackPic from '../resources/img-not-found.png'
import EditAd from './EditAd/EditAd';
import AdCard from './AdCard/AdCard'

export default class adDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            editMode: false,
        }
    }

    getAd = (query) => {
        fetchSingleAd(query)
            .then(data => this.setState({ data: data }));
    }

    componentDidMount() {
        this.getAd(this.props.match.params.id)
    }
    switchEditMode = () => {
        const mode = !this.state.editMode;

        this.setState({
            editMode: mode,
        });
        this.componentDidMount();
        this.forceUpdate();
    }

    render() {
        console.log(this.state.data)

        const data = this.state.data;
        return (
            // Meter un conditional render según editmode sea true or false
            <>
                <Link to={`/anuncios/`}><p>Return to Ad Board</p></Link>
                <AdCard data={this.state.data} />

                <button onClick={this.switchEditMode}> Edit Ad </button>

                {this.state.editMode ? <EditAd ad={this.state.data}
                    closeEditor={this.switchEditMode}
                    fetchAd={this.getAd}
                    props={this.props} /> 
                    : <></>}
            </>
        )
    }
}

