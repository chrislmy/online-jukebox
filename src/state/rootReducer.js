import { combineReducers } from 'redux';
import autocomplete from './autocomplete/reducers';
import user from './user/reducers';
import lobby from './lobby/reducers';
import searchVideos from './searchVideos/reducers';
import playlist from './playlist/reducers';
import video from './video/reducers';
import requests from './request/reducers';

const rootReducer = combineReducers({
    autocomplete,
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