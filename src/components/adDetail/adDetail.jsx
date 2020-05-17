import React, { Component } from 'react';
import { fetchSingleAd } from '../../api_caller';
import { BrowserRouter as Router, Link } from "react-router-dom";
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

        if (this.state.data) {
            return (

                <div className = "detailContainer">
                    <Link to={`/anuncios/`}><p>Return to Ad Board</p></Link>
                    <AdCard ad={this.state.data} />
    
                    <Button onClick={this.switchEditMode} variant="outline-primary"> Edit Ad </Button>
    
                    {this.state.editMode ? <EditAd ad={this.state.data}
                        closeEditor={this.switchEditMode}
                        fetchAd={this.getAd}
                        props={this.props} /> 
                        : <></>}
                </div>
            )
        } else {
            return (
                <div className="error-message">
                  <h1>Please log in</h1>
                  <h2> In order to use our patform you have to be a registered user.</h2>
                    
                  <p>Already register? <Link to="/login"><button>Go to login</button> </Link> </p>
                  <p>Want to create an account? <Link to="/register"><button>Go to register</button> </Link></p>
                </div>
              )
        }

    }
}

