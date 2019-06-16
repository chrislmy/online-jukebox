import { createReducer } from '../../utils/createReducer';
import { types } from './actions';

const initialState = {
    users: [],
    volume: 0
}

const handlers = {
    [types.UPDATE_VOLUME]: (state, { volume }) => ({
        ...state,
        volume
    }),
    [types.UPDATE_LOBBY_USERS]: (state, { users }) => ({
        ...state,
        users
    }),
};

export default createReducer(initialState, handlers);