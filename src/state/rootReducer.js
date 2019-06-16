import { combineReducers } from 'redux';
import user from './user/reducers';
import lobby from './lobby/reducers';
import searchVideos from './searchVideos/reducers';
import playlist from './playlist/reducers';
import video from './video/reducers';
import requests from './request/reducers';

const rootReducer = combineReducers({
    user,
    lobby,
    playlist,
    video,
    searchVideos,
    requests,
});

export default (state, action) => (
    rootReducer(state, action)  
);