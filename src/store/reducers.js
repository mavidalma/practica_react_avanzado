import * as TYPES from './types';

const initialState = {
    ads: [],
    user: null, 
    ui: {
        activeAd: {},
        fetching: false
    }
};

export default function adsReducer(state = initialState.ads, action) {
    
    switch(action.type) {
        case TYPES.FETCH_ADS_SUCCESS:
        return action.ads;

        case TYPES.FETCH_USER_FAILURE:
            return action.error;

        case TYPES.CREATE_AD:
            return [
                ...state,
                action.ad
            ];
        case TYPES.EDIT_AD:
            return state;

        default:
            return state;
    }
}