import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { types } from '../state/lobby/actions';
import rootReducer from '../state/rootReducer';

// Needed for sanitization of youtube player as payload is too large
const sanitizePlayer = (action) => {
    return action.type === types.MOUNT_PLAYER ?
    { ...action, player: '<<LONG_BLOB>>' } : action
};

const constructLobbyState = (state) => ({
    ...state,
    lobby: {
        users: state.lobby.users,
        volume: state.lobby.volume,
        player: '<<YOUTUBE_PLAYER>>'
    }
})

const middlewareEnhancers = () => {
    const enhancers = [
        applyMiddleware(thunkMiddleware)
    ];

    if(process.env.NODE_ENV === 'development' && window.devToolsExtension) {
        enhancers.push(window.devToolsExtension({
            sanitizePlayer,
            stateSanitizer: (state) => state.lobby.player 
                ? constructLobbyState(state) : state
        }));
    }

    return enhancers;
}

const store = createStore(
    rootReducer,
    compose(...middlewareEnhancers())
);

export default store;