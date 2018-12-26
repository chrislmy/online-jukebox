import types from '../../reducers/actionTypes';

const updateUsername = (username) => ({
    type: types.UPDATE_USERNAME,
    data: username
});

const updateLobbyUsers = (users) => ({
    type: types.UPDATE_USERS,
    data: users
});

export default {
    updateUsername,
    updateLobbyUsers
}