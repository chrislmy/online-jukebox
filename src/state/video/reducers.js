import { createReducer } from '../../utils/createReducer';
import { types } from './actions';

const initialState = {
    suggestedUser: '',
    videoId: '',
    videoTitle: '',
    videoDuration: ''
};

const handlers = {
    [types.UPDATE_CURRENT_VIDEO]: (state, { video }) => ({
        ...state,
        ...video
    })
};

export default createReducer(initialState, handlers);