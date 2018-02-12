// - Import external components
import * as redux from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { createLogger } from 'redux-logger';

// - Import reducers
import {
    authorizeReducer,
    PostsReducer,
} from '../reducers';

declare const window: any;

// Create a history of your choosing (we're using a browser history in this case)
export const history = createHistory();
// - Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);
const logger = createLogger();

// - Reducers
let reducer = redux.combineReducers({
    authorize: authorizeReducer,
    posts: PostsReducer,
});

// - initial state
let initialState = {
};

// - Config and create store of redux
let store: redux.Store<{}> = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(logger, thunk, middleware),
    (window as any).devToolsExtension ? (window as any).devToolsExtension() : (f: any) => f
));

export default store;