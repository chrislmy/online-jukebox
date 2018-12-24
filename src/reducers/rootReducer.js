import initialState from './initialState';
import { combineReducers } from 'redux';
import types from './actionTypes';

const video = (state = initialState.initialVideo, action) => {
    switch (action.type) {
        case types.UPDATE_CURRENT_VIDEO_TITLE:
            return { ...state, nowPlaying: action.data };
        case types.UPDATE_CURRENT_VIDEO_ID:
            return { ...state, videoId: action.data };
        default:
            return state;
    }
}

const playlist = (state = initialState.initialPlaylist, action) => {
    switch (action.type) {
        case types.UPDATE_PLAYLIST:
            return { ...state, currentPlaylist: action.data };
        default:
            return state;
    }
}

const user = (state = initialState.initialUser, action) => {
    switch (action.type) {
        case types.UPDATE_USERNAME:
            return { ...state, username: action.data };
        default:
            return state;
    }
}

const rootReducer = combineReducers({video, playlist, user});

export default rootReducer;