import * as TYPES from './actions';


const initialState = {
    ads: [],
    user: null, 
    ui: {
        activeAd: {},
        fetching: false
    }
};

export function ads(state = initialState.ads, action) {
    
    switch(action.type) {
        case TYPES.FETCH_ADS_SUCCESS:
        return action.ads;

        case TYPES.FETCH_USER_FAILURE:
            return action.error;

        case TYPES.CREATE_AD:
            return [
                ...state,
                ad
            ];
        case TYPES.EDIT_AD:
            return

        default:
            return state;
    }
}