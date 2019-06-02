import socket from '../../socket/createSocketClient';
import { FETCH_LOBBY_USERS, UPDATE_LOBBY_USERS } from '../../socket/socketMessages'; 

const types = {
    UPDATE_VOLUME: 'updateVolume',
    UPDATE_LOBBY_USERS: 'updateLobbyUsers'
};

const updateVolume = (volume, player) => (dispatch) => {
    dispatch({
        type: types.UPDATE_VOLUME,
        volume
    });

    if(volume === 0) {
        player.mute();
        return
    }

    player.setVolume(volume)
    player.unMute();
};

const getLobbyUsers = () => (dispatch) => {
    socket.emit(FETCH_LOBBY_USERS);
    socket.on(UPDATE_LOBBY_USERS, (users) => {
        dispatch({
            type: types.UPDATE_LOBBY_USERS,
            users
        });
    });
};


export {
    types,
    updateVolume,
    getLobbyUsers
};