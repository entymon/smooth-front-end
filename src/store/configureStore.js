import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers/indexReducer';
import { DEBUG } from '../Configuration';

const middleware = [
	promise(), thunk,
	DEBUG && createLogger(),
].filter(Boolean);
const createStoreWithMiddleware = applyMiddleware(...middleware);

export default () => {
	return createStore(reducer, createStoreWithMiddleware);
}