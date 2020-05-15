import * as TYPES from './types';

export const fetchAds = () => ({
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

export const createAd = ad => ({
    type: TYPES.CREATE_AD,
    ad
});

export const editrAd = () => ({
    type: TYPES.EDIT_AD
});

export const fetchUser = () => ({
    type: TYPES.FETCH_USER
});

export const fetchUserSuccess = user => ({
type: TYPES.FETCH_USER_SUCCESS,
user
});

export const fetchUserFailure = error => ({
type: TYPES.FETCH_USER_FAILURE,
error
});

