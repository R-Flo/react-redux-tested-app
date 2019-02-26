import React from 'react'
import { mount } from 'enzyme';

import Layout from '../components/Layout';

import './setUpTests';

jest.mock('../components/Home', () => () => <div id="home">Home</div>);


describe('Layout snapshot',()=>{
    it('It renders without crashing', () => {
        const wrapper =  mount(<Layout />);
        expect(wrapper).toMatchSnapshot();
        const home = wrapper.find('#home');
        console.log(home);
        console.log(home.length);
        expect(wrapper.find('#home').length).toEqual(1);

    });
});
