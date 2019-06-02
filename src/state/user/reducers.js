import { createReducer } from '../../utils/createReducer';
import { types } from './actions';

const initialState = {
    username: ''
};

const handlers = {
    [types.UPDATE_USERNAME]: (state, { username }) => ({
        ...state,
        username,
    })
};

export default createReducer(initialState, handlers);