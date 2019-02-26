import React from 'react'
import { shallow, mount } from 'enzyme';

import Layout from '../components/Layout';

import '../setUpTests';

jest.mock('../components/Home', () => () => <div id="home">Home</div>);


describe('Layout snapshot',()=>{
    it('It renders without crashing', () => {
        shallow(<Layout />);
    });

    it('It renders Home', () => {
        const wrapper =  mount(<Layout />);
        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('#home').length).toEqual(1);

    });
});
