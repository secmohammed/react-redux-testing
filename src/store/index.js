import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';
const initialState = {
    posts: []
}

export const middlewares = [ReduxThunk]
export const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middlewares),
);