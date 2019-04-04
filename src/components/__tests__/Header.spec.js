import React from 'react';
import { shallow } from 'enzyme'
import Header from '../Header.js'
import { findByTestAtrr } from '../../tests/setup.js'

describe('Header Component', function() {
    let component;
    beforeEach(() => {
        component = shallow(<Header />);
    })
    it('renders the header component wihtout errors', () => {
        let wrapper = findByTestAtrr(component, 'header');
        expect(wrapper.length).toBe(1);
    });
    
    it('should render a logo', () => {
        let wrapper = findByTestAtrr(component, 'logo');
        expect(wrapper.length).toBe(1);

    })
});
