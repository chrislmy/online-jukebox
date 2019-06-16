import { dataLoading } from "../request/actions";
import { INIT_LOBBY } from '../request/requestNames';
import socket from '../../socket/createSocketClient';
import { NEW_USER, USER_JOINED } from '../../socket/socketMessages';

const types = {
    UPDATE_USERNAME: 'updateUsername'
};

const updateUsername = (username) => ({
    type: types.UPDATE_USERNAME,
    username
});

// Initialises socket user connection with server
const setupUserConnection = () => (dispatch) => {
    // Username is stored per cookie
    const sessionUsername = localStorage.getItem("username");
    const userForServer = sessionUsername ? {username: sessionUsername} : {username: ''};

    socket.emit(NEW_USER, userForServer);
    dispatch(dataLoading(INIT_LOBBY));

    socket.on(USER_JOINED, (user) => {
        if(!sessionUsername) {
            dispatch(updateUsername(user.username));
            localStorage.setItem('username', user.username);
        } else {
            dispatch(updateUsername(sessionUsername));
        }
    });
};

export {
    types,
    updateUsername,
    setupUserConnection
}