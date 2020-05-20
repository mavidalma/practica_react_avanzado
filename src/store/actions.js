import * as TYPES from './types';

export const fetchAdsReq = () => ({
        type: TYPES.FETCH_ADS
});

export const fetchAdsSuccess = ads => ({
    type: TYPES.FETCH_ADS_SUCCESS,
    ads
});

export const fetchAdsFailure = error => ({
    type: TYPES.FETCH_ADS_FAILURE,
    error
});

export const fetchAds = (query = "") => {
    async function action(dispatch, getState, API) {
        try {
            dispatch(fetchAdsReq());
            const call = await API.fetchAds(query);
            const ads = call.results;
            dispatch(fetchAdsSuccess(ads));
        } catch (error) {
            dispatch(fetchAdsFailure(error));
        }
        
    }
    return action
}

export const createAd = ad => ({
    type: TYPES.CREATE_AD,
    ad
});

export const editAd = () => ({
    type: TYPES.EDIT_AD
});


export const fetchTagsReq = () => ({
    type: TYPES.FETCH_TAGS
});

export const fetchTagsSuccess = tags => ({
type: TYPES.FETCH_TAGS_SUCCESS,
tags
});

export const fetchTagsFailure = error => ({
type: TYPES.FETCH_TAGS_FAILURE,
error
});

export const fetchTags = () => {
async function action(dispatch, getState, API) {
    try {
        dispatch(fetchTagsReq());
        const tags = await API.getTags();
        console.log("API fetching on action", tags);
        dispatch(fetchTagsSuccess(tags));
    } catch (error) {
        dispatch(fetchTagsFailure(error));
    }
}
return action
};


export const userLogin = () => ({
    type: TYPES.USER_LOGIN
});

export const userLogout = () => ({
    type: TYPES.USER_LOGOUT
});

export const getUserFromStorage = () => {
    return function (dispatch, getState, API) {
        sessionStorage.getItem("AnunciaLOLUserLogged") ? dispatch(userLogin()) : dispatch(userLogout());
    }
};
