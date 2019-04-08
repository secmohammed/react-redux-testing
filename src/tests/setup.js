import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import checkPropTypes from 'check-prop-types';
import  { applyMiddleware, createStore } from 'redux';
import rootReducer from '../store/reducers'
import { middlewares } from '../store'
Enzyme.configure({
    adapter: new EnzymeAdapter(),
    disableLifecycleMethods: true
});
import { store } from '../store'
export const findByTestAtrr = (component, attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
};

export const checkProps = (component, expectedProps) => {
    return checkPropTypes(component.propTypes, expectedProps, 'props', component.name);
};
export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState)
}