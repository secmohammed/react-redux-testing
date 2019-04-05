import React from 'react';
import { shallow } from 'enzyme'
import Headline from '../Headline.js'
import { findByTestAtrr, checkProps } from '../../tests/setup.js'
import checkPropTypes from 'check-prop-types';

describe('Headline Component', function() {
    describe('checking prop types', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                header: 'Test Header',
                desc: 'Test Desc'
            };
            expect(checkProps(Headline, expectedProps)).toBeUndefined();

        })
    })
    let component;
    beforeEach(() => {
        const props = {
            header: 'Test Header',
            desc: 'Test Desc'
        };
        component = shallow(<Headline {...props} />);
    })
    it('should render without errors', () => {
        let wrapper = findByTestAtrr(component, 'headline')
        expect(wrapper.length).toBe(1);
    })
    it('should render the passed header property', () => {
        let wrapper = findByTestAtrr(component, 'header');
        expect(wrapper.text()).toContain('Test Header')
    })
    it('should render the passed description property', () => {
        let wrapper = findByTestAtrr(component, 'description');
        expect(wrapper.text()).toContain('Test Desc')
    })
});
