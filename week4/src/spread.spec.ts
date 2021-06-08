import { expect } from 'chai';
import 'mocha';
import { bob, data, kyle, numbers, originalNumbers, originalPersons, originalUpdates, runnerUps, update, winners } from './spread';

describe('Test for the spread.ts', ()=>{
    
    it('should give out copy array', ()=> {
        let   numbers=[1, 2, 3, 4, 5];
        if(numbers==originalNumbers)
        expect (originalNumbers).to.be.equal([1, 2, 3, 4, 5]);
        
    });

    
    it('should give out combine array', ()=> {
        let   runnerUps=[...winners,'second', 'third', 'fourth', 'fifth'];
        if([...winners]==['first','second'])
        expect (runnerUps).to.be.equal(['first','second', 'third', 'fourth', 'fifth']);
        
    });

    it('should give out combine array', ()=> {
        let     originalPersons=({...bob, ...kyle});
        if(originalPersons=={...bob, ...kyle}){

        expect (originalPersons).to.be.equal(  'Bob','kyle');
        }

    });

  

});







