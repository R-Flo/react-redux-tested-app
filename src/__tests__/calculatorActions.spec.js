import { addInputs , subtractInputs, fetchRandomNumber } from '../actions/calculatorActions'

describe('ACTIONS - Test calculatorActions',()=>{

    it('actionCreator addInputs', () => {
        const add = addInputs(50);
        expect(add).toEqual({type:"ADD_INPUTS",output:50})
    });


    it('actionCreator subtractInputs', () => {
        const subtract = subtractInputs(-50);
        expect(subtract).toEqual({type:"SUBTRACT_INPUTS",output:-50})
    });

    it('fetch is working', async () => {
        const data = await fetchRandomNumber();
        expect(typeof data == 'number').toBeTruthy();
    });

});

