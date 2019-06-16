import { createReducer } from '../../utils/createReducer';
import { types } from './actions';

const initialState = {
    currentPlaylist: []
};

const handlers = {
    [types.UPDATE_PLAYLIST]: (state, { currentPlaylist }) => ({
        ...state,
        currentPlaylist
    })
};

export default createReducer(initialState, handlers);