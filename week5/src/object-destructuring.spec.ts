import { expect } from 'chai';
import 'mocha';
import { greeting, info, name, nestedObject, object } from './object-destructuring';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    let {name:person, title:job}=object;
    
    expect(person).to.be.equal('elvis');

  });

  it('#2 should have a variable for every property in the given nested object', () => {
    let {user, address, id}=nestedObject;
    
    expect(user).to.be.equal('elvis');
  });

  it('#3 should create a new object given the destructed variables from the nested object', () => {
    let {user:x, address:y, id:z}=info;
    // i decontructed here to show that the construction was successful for each property
    
      expect(x).to.be.equal('elvis');
    }
);

  it('#4 should construct a statement from the given object', () => {
    let intro={ greeting: 'hello', name: 'taylor' };
    
      expect(greeting).to.be.equal('hello');
    }
  );
});
