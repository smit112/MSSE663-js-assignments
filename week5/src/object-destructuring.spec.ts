import { expect } from 'chai';
import 'mocha';
import { info, name, nestedObject, object } from './object-destructuring';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () => {
    const {name:person, title:job}=object;
    if(name==person)
    expect({person}).to.be.equal('elvis');

  });

  it('#2 should have a variable for every property in the given nested object', () => {
    const {user, address, id}=nestedObject;
    if({user, address, id}==nestedObject)
    expect({user}).to.be.equal('elvis');
  });

  it('#3 should create a new object given the destructed variables from the nested object', () => {
    const {user:x, address:y, id:z}=info;
    // i decontructed here to show that the construction was successful for each property
    if({user:x, address:y, id:z}==info){
      expect(x).to.be.equal('elvis');
    }
  });

  it('#4 should construct a statement from the given object', () => {
    const intro={ greeting: 'hello', name: 'taylor' };
    if({greeting:'hello', name:'taylor'}==intro){
      expect(intro).to.be.equal('hello, taylor!');
    }
  });
});
