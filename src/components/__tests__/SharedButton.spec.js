import React from 'react';
import { shallow } from 'enzyme'
import SharedButton from '../SharedButton.js'
import { findByTestAtrr, checkProps } from '../../tests/setup.js'

describe('Shared button Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const expectedProps = {
                buttonText: 'Example Button Text',
                emitEvent: () => {

                }
            }
            const propsError = checkProps(SharedButton, expectedProps);
            expect(checkProps(SharedButton, expectedProps)).toBeUndefined();
        })
    })
    let wrapper;
    beforeEach(() => {
        const props = {
            buttonText: 'Example Button Text',
            emitEvent: () => {

            }
        }
        
        wrapper = shallow(<SharedButton {...props} />)
    })
    it('redners the button', () => {
        const button = findByTestAtrr(wrapper, 'button')
        expect(button.text()).toContain('Example Button Text')
    })
})