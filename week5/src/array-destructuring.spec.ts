import { expect } from 'chai';
import 'mocha';
import { food, fruits, intro,  } from './array-destructuring';


describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () => {

    const [a, b]= fruits;
    
    expect(a).to.be.equal("apple");
  }
    
    

    
);

  it('#2 should have a variable for the first 2 elements then spread the rest', () => {
    const [a, b, ...others]= food;
    
    expect(a).to.be.equal("apple");
    expect(b).to.be.equal("banana");
    }
  );

  it('#3 should construct a statement from the given objarrayect', () => {

    const [x, y]=intro;
    
    expect(x).to.be.equal('hello' );


  });

});