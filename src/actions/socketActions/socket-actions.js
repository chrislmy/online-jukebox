import store from '../../store/index';
import socketIOClient from 'socket.io-client';
import socketMessages from './socket-messages';
import config from '../../config';
import videoQueueActions from '../actionCreators/video-queue-actions';
import userActions from '../actionCreators/user-actions';
import lobbyActions from '../actionCreators/lobby-actions';

const socket = socketIOClient(config.keys.SERVER_BASE_ENDPOINT);

// Initialises socket user connection with server
const setupUserConnection = () => {
    // Username is stored per cookie
    const sessionUsername = localStorage.getItem("username");
    const userForServer = sessionUsername ? {username: sessionUsername} : {username: ''}
    socket.emit(socketMessages.NEW_USER, userForServer);
    lobbyActions.updateLoadingStatus('calling', {type: 'CONNECTING_TO_LOBBY', isLoading: true});
    socket.on(socketMessages.USER_JOINED, (user) => {
        if(!sessionUsername) {
            store.dispatch(userActions.updateUsername(user.username));
            localStorage.setItem('username', user.username);
        } else {
            store.dispatch(userActions.updateUsername(sessionUsername));
        }
    })
}

// Initialises socket lobby connection with server
const setupLobbyConnection = () => {
    socket.emit(socketMessages.FETCH_LOBBY_USERS);
    socket.on(socketMessages.UPDATE_LOBBY_USERS, (users) => {
        store.dispatch(userActions.updateLobbyUsers(users));
    })
}

// Initialises socket playlist connection with server
const setupPlaylistConnection = () => {
    socket.emit(socketMessages.FETCH_PLAYLIST);
    socket.on(socketMessages.UPDATE_PLAYLIST, (data) => {
        const playlist = data.videos;
        const video = videoQueueActions.getHeadVideoPlaylist(playlist);
        store.dispatch(videoQueueActions.updatePlaylist(playlist));
        store.dispatch(videoQueueActions.updateCurrentVideo(video));
        lobbyActions.updateLoadingStatus('complete', {type: 'CONNECTING_TO_LOBBY', isLoading: false});
    });
}

const playNextVideo = (videoId, defaultSkip) => {
    socket.emit(socketMessages.PLAY_NEXT_VIDEO, { videoId, defaultSkip });
}

const addToPlaylist = (video) => {
    socket.emit(socketMessages.ADD_TO_PLAYLIST, video);
}

// Initial setup of socket connections when jukebox is launched
const initialSetup = () => {
    setupUserConnection();
    setupPlaylistConnection();
    setupLobbyConnection();
}

export default {
    initialSetup,
    addToPlaylist,
    playNextVideo
}