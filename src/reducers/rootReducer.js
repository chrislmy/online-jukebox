import initialState from './initialState';
import { combineReducers } from 'redux';
import types from './actionTypes';

const video = (state = initialState.initialVideo, action) => {
    switch (action.type) {
        case types.UPDATE_CURRENT_VIDEO:
            return { ...state, ...action.data };
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


const lobby = (state = initialState.initialLobby, action) => {
    switch (action.type) {
        case types.UPDATE_USERS:
            return { ...state, users: action.data };
        case types.UPDATE_VOLUME:
            return { ...state, volume: action.data };
        case types.LOADING_DATA:
            return { ...state, loadingData: action.data };
        case types.DATA_LOADED_COMPLETE:
            return { ...state, loadingData: action.data };
        default:
            return state;
    }
}

const rootReducer = combineReducers({video, playlist, user, lobby});

export default rootReducer;