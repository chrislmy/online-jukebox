import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/rootReducer';

const middlewareEnhancers = () => {
    const enhancers = [
        applyMiddleware(thunkMiddleware)
    ];

    if(process.env.NODE_ENV === 'development' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension());
    }

    return enhancers;
}

const store = createStore(
    rootReducer,
    compose(...middlewareEnhancers())
);

export default store;