import React from 'react'
import { shallow, mount, render } from 'enzyme';

import ConnectedHome,{Home} from '../components/Home';

import {Provider} from 'react-redux';
import '../setUpTests';

import {addInputs, subtractInputs} from '../actions/calculatorActions'
import {createStore} from 'redux'
import calculatorReducers from '../reducers/calculatorReducers'

describe('HOME snapshot',()=>{
    it('It renders without crashing', () => {
        const wrapper =  shallow(<Home output={10}/>);
        expect(wrapper).toMatchSnapshot();
    });

});

describe('HOME shallow description',()=>{
    let wrapper;
    const output = 10;

    //Permet avant chaque it de refaire un fresh shallow rendering
    // afin d'éviter les conflits avec les tests précédents
    beforeEach(()=>{
        wrapper = shallow(<Home output={output}/>)
    });

    it('Renders', () => {
       expect(wrapper.length).toEqual(1)
    });

    it('Contains header - h2', () => {
        expect(wrapper.contains(<h2>Using React and Redux</h2>)).toBe(true)
    });
    it('H2 header value ', () => {
        expect(wrapper.find('h2').get(0).props.children).toBe("Using React and Redux")
    });
    it('Contains input1', () => {
        expect(wrapper.find('input').at(0)
                .equals(<input type="text" placeholder="Input 1" ref="input1" />))
                .toBe(true)
    });
    it('Contains input2', () => {
        expect(wrapper.find('input').at(1)
                .equals(<input type="text" placeholder="Input 2" ref="input2" />))
                .toBe(true)
    });
     it('Contains output', () => {
        expect(wrapper.find('input[placeholder="Output"]').prop('value')).toEqual(output)
    });
    it('Contains button with id="add"', () => {
        expect(wrapper.find('button#add').type()).toEqual('button')
    });
    it('Contains button with id="subtract"', () => {
        expect(wrapper.find('button#subtract').type()).toEqual('button')
    });
});


describe('HOME connected to store',()=>{

    let store, wrapper;

    beforeEach(()=>{
        store = createStore(calculatorReducers);
        wrapper = shallow( <Provider store={store}><ConnectedHome /></Provider> ).dive();
    });

    it('Check store works', () => {
        store.dispatch(addInputs(500));
        expect(wrapper.find(Home).prop('output')).toBe(500)
    });

});

describe('HOME mounted',()=>{

    let store, wrapper;
    const fetchRandomNumber = jest.fn().mockResolvedValue(145);


    beforeEach(()=>{
        store = createStore(calculatorReducers);
        wrapper = mount( <ConnectedHome store={store} fetchRandomNumber={fetchRandomNumber}/>);
    });


    it('Calculate when Inputs are Filled and ADD is Clicked', () => {

        let input1 = wrapper.find('input').at(0);
        input1.instance().value = 20;

        let input2 = wrapper.find('input').at(1);
        input2.instance().value = 20;

        let addButton = wrapper.find('button').at(0);

        addButton.simulate('click');

        let output = wrapper.find('input').at(2);

        expect(output.prop('value')).toEqual(40);
    });


    it('Calculate when Inputs are Filled and ADD is Clicked', () => {
        let substractButton = wrapper.find('button').at(0);
    });

    it('fetch when asked', () => {

        let fetchButton = wrapper.find('button').at(2);

        fetchButton.simulate('click');

        setTimeout(checkValue, 100);

        function checkValue(){
            let input1 = wrapper.find('input').at(0);
            expect(input1.prop('value')).toEqual(145);
        }


    });


});
