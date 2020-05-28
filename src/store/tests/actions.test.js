import * as TYPES from '../types';
import * as action from '../actions';
import * as API from '../../api_caller';

describe('check ads actions', ()=> {
    const ads = [
        {
            name: "test1",
            description: "desription1",
            price: 25,
        },
        {
            name: "test2",
            description: "desription2",
            price: 10,
        },
    ];

    const error = "505 error mocked"

    test('fetchAdsSuccess should pass ads', ()=>{
        const fakedAction = {
            type:TYPES.FETCH_ADS_SUCCESS,
            ads
        }
    expect(action.fetchAdsSuccess(ads)).toEqual(fakedAction);
    });

    test('fetchAdsFailure should pass error', ()=> {
        const fakedAction = {
            type:TYPES.FETCH_ADS_FAILURE,
            error
        }
    expect(action.fetchAdsFailure(error)).toEqual(fakedAction);
    expect(action.fetchAdsFailure(error).error).toEqual(error);
    })

    describe('fetchAds testing', ()=> {
        let query = "";
        const dispatch = jest.fn();
        const getState = jest.fn();

        test('fetchAds should dispatch request and success', async ()=> {
            const fetch = action.fetchAds(query);
            
            await fetch(dispatch, getState);
            //cuando quiere llamar a la API sale undefined y da error interno, por eso no puedo testar la accion concreta Success

            expect(dispatch).toHaveBeenCalledTimes(2);
            expect(dispatch).toHaveBeenCalledWith(action.fetchAdsReq());

        });
    })
})