import { expect } from 'chai';
import 'mocha';
import { bob, competitors, data, kyle, numbers, originalNumbers, originalPersons, originalUpdates, runnerUps, update, winners } from './spread';

describe('Test for the spread.ts', ()=>{
    
    it('should give out copy array', ()=> {
    
        let numbers=[1,2,3,4,5];
        expect (originalNumbers).to.be.equal(1);
        
    });

    
    it('should give out combine array', ()=> {
        let   runnerUps=[...winners,'second', 'third', 'fourth', 'fifth'];
        
        expect (competitors).to.be.equal( runnerUps);
        
    });

    it('should give out combine array', ()=> {
        let     originalPersons=({...bob, ...kyle});
        {

        expect (originalPersons ).to.be.equal( 'Bob');
        }

    });

  

});







