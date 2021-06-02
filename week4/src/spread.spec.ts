import { expect } from 'chai';
import 'mocha';
import { bob, kyle, numbers, originalNumbers, runnerUps, winners } from './spread';

describe('Test for the spread.ts', ()=>{
    
    it('should give out copy array', ()=> {
        let   numbers=[1, 2, 3, 4, 5];
        expect (originalNumbers).to.be.equal(numbers);
        
    });

    
    it('should give out combine array', ()=> {
        let   runnerUps=[...winners,'second', 'third', 'fourth', 'fifth'];
        expect (runnerUps).to.be.equal(['first','second', 'third', 'fourth', 'fifth']);
        
    });

    it('should give out combine array', ()=> {
        let     originalPersons=({...bob, ...kyle});

        expect (originalPersons).to.be.equal(  'Bob',  'Kyle');

    });

});




function man(man: any, arg1: string, boy: any, arg3: string) {
    throw new Error('Function not implemented.');
}

function boy(arg0: string, boy: any, arg2: string) {
    throw new Error('Function not implemented.');
}

