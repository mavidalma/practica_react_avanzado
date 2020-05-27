import * as TYPES from '../types';
import * as reducers from '../reducers';


describe('check reducers', ()=> {
    const ads =[
        {
            name: "test1",
            description: "desription1"
        },
        {
            name: "test2",
            description: "desription2"
        },
    ];
    const tags = ["1", "2", "3"]

    let initialState = {
        ads: [],
        user: false,
        tags: [], 
        ui: {
            fetching: false
        }
    };

    beforeEach(()=> {
        initialState = {
            ads: [],
            user: false,
            tags: [], 
            ui: {
                fetching: false
            }
        };
    })

    test('should implement a FETCH_ADS_SUCCESS action', ()=> {
        const action = {
            type: TYPES.FETCH_ADS_SUCCESS,
            ads
        }

        expect(reducers.ads(initialState.ads, action)).toEqual(ads);
        expect(reducers.ui(initialState.ui.fetching, action).fetching).toBe(false)
    });

    test('should implement a FETCH_TAGS_SUCCESS action', ()=> {
        const action = {
            type: TYPES.FETCH_TAGS_SUCCESS,
            tags
        }
        expect(reducers.tags(initialState.tags, action)).toEqual(tags);
    });

    test('should implement a USER_LOGIN action', ()=> {
        const action= {
            type: TYPES.USER_LOGIN
        }
        expect(reducers.user(initialState.user, action)).toBe(true);
    });

    test('should implement a USER_LOGOUT action', ()=> {
        const action= {
            type: TYPES.USER_LOGOUT
        }
        expect(reducers.user(initialState.user, action)).toBe(false);
    })

    test('should toggle fetching state to true', ()=> {
        const action = {
            type: TYPES.FETCH_ADS,
        }

        expect(reducers.ui(initialState.ui.fetching, action).fetching).toBe(true)
    });

    test('Should not recognize the action', ()=> {
        const action = {
            type: "FALSY_ACTION",
            ads
        }
        expect(reducers.ads(initialState.ads, action)).toEqual(initialState.ads);
        expect(reducers.tags(initialState.tags, action)).toEqual(initialState.tags);
        expect(reducers.user(initialState.user, action)).toEqual(initialState.user);
    })


})