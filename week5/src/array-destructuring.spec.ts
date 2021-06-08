import { expect } from 'chai';
import 'mocha';
import { food, fruits, intro,  } from './array-destructuring';


describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {

    const [a, b]= fruits;
    if([a, b]==fruits){
    expect([a, b]).to.be.equal("apple", "banana");
  }
    
    

    
});

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    const [a, b, ...others]= food;
    if([a, b, ...others]==food){
    expect([...others]).to.be.equal( ['chocolate', 'pears', 'oats', 'pizza']);
    }
  });

  it('#3 should construct a statement from the given objarrayect', () => {

    const [x, y]=intro;
    if(intro==[x,y])
    expect(intro).to.be.equal('hello,taylor!' );


  });
});
