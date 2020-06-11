import React, {useState, useEffect} from 'react';
import { fetchSingleAd } from '../../api_caller';
import { BrowserRouter as Router, Link } from "react-router-dom";
import './detail.css';
import EditAd from '../EditAd/EditAd';
import AdCard from '../AdCard/AdCard';
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from 'react-redux';
import { fetchTags } from '../../store/actions';
import { getTags } from '../../store/selectors'

export default function AdDetail ({...props}) {
    const dispatch = useDispatch();
    dispatch(fetchTags);

    const tags = useSelector(state => getTags(state));


    const [ad, setAd] = useState({})
    const [edit, setEdit] = useState(false);

    const getAd = (query) => {
        fetchSingleAd(query)
            .then(data => setAd({data}));
    }

    useEffect( ()=> {
        console.log("ad Detail: ", props.match.params.id)
        getAd(props.match.params.id)
    }, ad.data);

    const switchEditMode = () => setEdit(!edit);

    if (ad.data) {
         return (
            <div className = "detailContainer">
                <Link to={`/anuncios/`}><p>Return to Ad Board</p></Link>
                <AdCard ad={ad.data} />

                <Button onClick={switchEditMode} variant="outline-primary"> Edit Ad </Button>
    
                {edit ? <EditAd ad={ad.data}
                    closeEditor={switchEditMode}
                    fetchAd={getAd}
                    tags={tags}
                    {...props} />
                : ""}
            </div>
            )
    } else { return (<></>)}
}

