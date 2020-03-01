import React, { Component } from 'react';
import { fetchSingleAd } from '../api_caller';
import { BrowserRouter as Router, Route, Link, Switch, withRouter } from "react-router-dom";
import './detail.css';
import EditAd from './EditAd/EditAd';
import AdCard from '../AdCard/AdCard';
import { Button } from "react-bootstrap";

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

        const data = this.state.data;
        
        return (

            <>
                <Link to={`/anuncios/`}><p>Return to Ad Board</p></Link>
                <AdCard data={this.state.data} />

                <Button onClick={this.switchEditMode} variant="outline-primary"> Edit Ad </Button>

                {this.state.editMode ? <EditAd ad={this.state.data}
                    closeEditor={this.switchEditMode}
                    fetchAd={this.getAd}
                    props={this.props} /> 
                    : <></>}
            </>
        )
    }
}

