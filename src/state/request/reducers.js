import { createReducer } from '../../utils/createReducer';
import { types } from './actions';

const statuses = {
    LOADING: 'loading',
    SUCCESS: 'ok',
    ERROR: 'error'
};

const initialState = {
    loadingRequests: {}
};

const handlers = {
    [types.LOADING_DATA]: (state, { requestName }) => ({
        loadingRequests: {
            ...state.loadingRequests,
            [requestName]: {
                status: statuses.LOADING,
                isLoading: true
            }
        }
    }),
    [types.DATA_LOADED_SUCCESS]: (state, { requestName }) => ({
        loadingRequests: {
            ...state.loadingRequests,
            [requestName]: {
                status: statuses.SUCCESS,
                isLoading: false
            }
        }
    }),
    [types.DATA_LOADED_FAILURE]: (state, { requestName }) => ({
        loadingRequests: {
            ...state.loadingRequests,
            [requestName]: {
                status: statuses.ERROR,
                isLoading: false
            }
        }
    })
};

export default createReducer(initialState, handlers);