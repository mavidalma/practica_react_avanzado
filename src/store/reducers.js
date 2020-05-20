import * as TYPES from './types';

const initialState = {
    ads: [],
    user: false,
    tags: [], 
    ui: {
        activeAd: {},
        fetching: false
    }
};

export function ads(state = initialState.ads, action) {
    
    switch(action.type) {
        case TYPES.FETCH_ADS_SUCCESS:
        return action.ads;

        case TYPES.FETCH_ADS_FAILURE:
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

export function tags(state = initialState.tags, action) {
    
    switch(action.type) {
        case TYPES.FETCH_TAGS_SUCCESS:
        return action.tags;

        case TYPES.FETCH_TAGS_FAILURE:
            return action;

        default:
            return state;
    }
}

export function user(state = initialState.user, action) {
    switch(action.type) {
        case TYPES.USER_LOGIN:
        return true

        case TYPES.USER_LOGOUT:
            return false

        default:
            return state;
    }
}