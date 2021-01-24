import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk'
import reducer from './ducks';

const enhancer = compose(applyMiddleware(thunk))

export default () => createStore(reducer, enhancer)
