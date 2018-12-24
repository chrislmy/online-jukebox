import types from '../../reducers/actionTypes';

const updateUsername = (username) => ({
    type: types.UPDATE_USERNAME,
    data: username
});

export default {
    updateUsername
}