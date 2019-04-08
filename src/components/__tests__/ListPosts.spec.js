import React from 'react';
import { shallow } from 'enzyme'
import ListPosts from '../ListPosts.js'
import { findByTestAtrr, checkProps } from '../../tests/setup.js'

const expectedProps = {
    title: 'Example Title',
    desc: 'Some text'
}

describe('List Posts Component', () => {
    describe('Checking PropTypes', () => {
        it('Should not throw a warning', () => {
            const propsError = checkProps(ListPosts, expectedProps);
            expect(propsError).toBeUndefined(); 
        })
    })
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ListPosts {...expectedProps} />)
    })
    it('renders the post', () => {
        const component = findByTestAtrr(wrapper, 'list-posts')
        expect(component.length).toBe(1);
    })
    it('Should render a title', () => {
        const component = findByTestAtrr(wrapper, 'title')
        expect(component.text()).toContain(expectedProps.title)
    })
    it('Should render a description', () => {
        const component = findByTestAtrr(wrapper, 'desc')
        expect(component.text()).toContain(expectedProps.desc)
    })
})