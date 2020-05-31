import * as TYPES from '../types';
import * as reducers from '../reducers';
import * as actions from '../actions';
import * as selector from '../selectors';

describe('check reducers', ()=> {

    let initialState = {
        ads: [
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
        ],
        user: false,
        tags: ["1", "2", "3"], 
        ui: {
            fetching: false
        }
    };

    test('getAds should return ads', ()=> {
        const ads = selector.getAds(initialState);
        expect(ads).toEqual(initialState.ads);
    });

    test('getTags should return tags', ()=> {
        const tags = selector.getTags(initialState);
        expect(tags).toEqual(initialState.tags);
    });

    test('isLogged should return user state', ()=> {
        const user = selector.isLogged(initialState);
        expect(user).toBe(false);
    });

    test('isFetching should return false', ()=> {
        const isFetching = selector.isFetching(initialState);
        expect(isFetching).toBe(false);
    });

    test('adsTopPrice should return higher price', ()=> {
    
        const price = selector.adsTopPrice(initialState);
        expect(price).toBe(25);
    });

})