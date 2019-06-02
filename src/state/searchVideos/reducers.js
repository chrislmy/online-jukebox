import { createReducer } from '../../utils/createReducer';
import { types } from './actions';

const initialState = {
    error: false,
    videos: []
};

const handlers = {
    [types.FAILURE]: (state) => ({
        ...state,
        error: true,
    }),
    [types.SUCCESS]: (state, { videos }) => ({
        ...state,
        error: false,
        videos
    })
};

export default createReducer(initialState, handlers);
