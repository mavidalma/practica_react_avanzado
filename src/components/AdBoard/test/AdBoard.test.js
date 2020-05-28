import React from 'react';
import AdBoard from '../AdBoard';
import { shallow } from 'enzyme';

describe('snapshop test od AdBoard', ()=> {
    const props = {
        ads: [
        {
            name: "test1",
            description: "description1",
            price: 25,
            type: 'sell',
            tag: 'motor',
        },
        {
            name: "test2",
            description: "description2",
            price: 10,
            type: 'buy',
            tag: "work"
        },
        ],
        loading: false,
        tags: ['motor', 'lifestyle', 'work'],
        user: true,
        fetchAds: jest.fn(),
        getUserFromStorage: jest.fn(),
        fetchTags: jest.fn(),
        className: 'test',
    }
    let wrapper;

    beforeEach(()=> {
        wrapper = shallow(<AdBoard {...props} />);
    });

    test('AdBoad snapshot', ()=> {
        expect(wrapper).toMatchSnapshot();
    });

    test("component renders", ()=> {
        expect(wrapper.exists()).toBe(true)
    });
    test("has tags props", ()=> {
        expect(wrapper.props().tags).toEqual(props.tags)
    });
    
/*
    test('should render Loading component when isLoading is set to true', ()=> {
        wrapper.setProps({ loading: true });
        console.log(wrapper.debug());
        expect(wrapper.find('Loading')).toBe(true);

    });*/
/*
    test("Adwall renders when component is loaded", ()=> {
        console.log(wrapper.debug());
        expect(wrapper.find('AdWall')).toBe(true);
    })*/
})