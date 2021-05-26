
import 'mocha';
import { expect } from 'chai';
import { Max } from './app';

describe('Test for the app.ts', ()=>{

    it('should give out o/p', ()=> {
        const max = new Max('Max', 30, 'welder', 'building' );
        expect(max.name).to.equal('Max');

    });
});
describe('age in app.ts', ()=>{

    it('should give persons app status', ()=> {
        const max = new Max('Max', 30, 'welder', 'Building' );
        expect(max.age).to.equal(30);

    });
});
describe('Job in app.ts', ()=>{

    it('should give persons job', ()=> {
        const max = new Max('Max', 30, 'welder', 'building' );
        expect(max.type).to.equal('welder');

    });
});

