import { createReducer } from '../../utils/createReducer';
import { types } from './actions';

const initialState = {
    error: false,
    isLoading: false,
    multiple: false,
    options: []
};

const handlers = {
    [types.FAILURE]: (state) => ({
        ...state,
        error: true,
    }),
    [types.SUCCESS]: (state, { options }) => ({
        ...state,
        error: false,
        options
    }),
    [types.LOADING]: (state) => ({
        ...state,
        isLoading: true
    }),
    [types.LOADING_COMPLETE]: (state) => ({
        ...state,
        isLoading: false
    })
};

export default createReducer(initialState, handlers);