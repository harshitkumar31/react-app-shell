import { configure, shallow }  from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Shell from '../../src/shell';

configure({ adapter: new Adapter() });


describe('Shell tests',()=>{
    it('checking mocha', () => {
        expect(true).to.equal(true);
    });

});
