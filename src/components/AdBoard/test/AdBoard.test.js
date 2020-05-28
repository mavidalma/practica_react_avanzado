import React from 'react';
import AdBoard from '../AdBoard';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzy

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
        fetchTags: jest.fn(),
        getUserFromStorage: jest.fn(),
        fetchtags: jest.fn()
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
    } )

    test("ads render when component is loaded", ()=> {
        wrapper.setProps({ loading: true });
        expect(wrapper.contains(<Loading />)).to.equal(true);
    } )
})