import { configure, shallow, mount }  from 'enzyme';
import { expect } from 'chai';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ShellWithRouter, { Shell as ShellWithoutRouter } from '../../src/shell';
import  { JSDOM } from 'jsdom';
import { MemoryRouter as Router} from 'react-router-dom';

configure({ adapter: new Adapter() });

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function (id) {
  clearTimeout(id);
};
copyProps(window, global);

describe('Shell',()=>{
    it('Should mount', () => {
        const inputConfig = [
            {
                header: { 
                    visible: true,
                    title: 'Title',
                    navList: [
                        {
                            title: 'About',
                            link: '/about',
                            key: 'about'
                        }
                    ]
                }}
        ];
        const wrapper = mount(<Router><ShellWithoutRouter config={inputConfig} /></Router>);
        expect(wrapper.find('.header')).to.have.lengthOf(1);

    });

});
