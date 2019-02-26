import { addInputs , subtractInputs } from '../actions/calculatorActions'

describe('ACTIONS - Test calculatorActions',()=>{
    it('actionCreator addInputs', () => {
        const add = addInputs(50);
        expect(add).toEqual({type:"ADD_INPUTS",output:50})
    });

    it('actionCreator subtractInputs', () => {
        const subtract = subtractInputs(-50);
        expect(subtract).toEqual({type:"SUBTRACT_INPUTS",output:-50})
    });
});

