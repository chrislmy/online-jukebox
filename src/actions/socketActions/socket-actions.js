import socketIOClient from 'socket.io-client';
import socketMessages from './socket-messages';
import config from '../../config';
import videoQueueActions from '../actionCreators/video-queue-actions';
import userActions from '../actionCreators/user-actions';
import lobbyActions from '../actionCreators/lobby-actions';

const socket = socketIOClient(config.keys.SERVER_BASE_ENDPOINT);

// Initialises socket user connection with server
const setupUserConnection = (dispatch) => {
    // Username is stored per cookie
    const sessionUsername = localStorage.getItem("username");
    const userForServer = sessionUsername ? {username: sessionUsername} : {username: ''};
    socket.emit(socketMessages.NEW_USER, userForServer);
    lobbyActions.updateLoadingStatus('calling', {type: 'CONNECTING_TO_LOBBY', isLoading: true});
    socket.on(socketMessages.USER_JOINED, (user) => {
        if(!sessionUsername) {
            dispatch(userActions.updateUsername(user.username));
            localStorage.setItem('username', user.username);
        } else {
            dispatch(userActions.updateUsername(sessionUsername));
        }
    });
};

// Initialises socket lobby connection with server
const setupLobbyConnection = (dispatch) => {
    socket.emit(socketMessages.FETCH_LOBBY_USERS);
    socket.on(socketMessages.UPDATE_LOBBY_USERS, (users) => {
        dispatch(userActions.updateLobbyUsers(users));
    });
};

// Initialises socket playlist connection with server
const setupPlaylistConnection = (dispatch) => {
    socket.emit(socketMessages.FETCH_PLAYLIST);
    socket.on(socketMessages.UPDATE_PLAYLIST, (data) => {
        const playlist = data.videos;
        const video = videoQueueActions.getHeadVideoPlaylist(playlist);
        dispatch(videoQueueActions.updatePlaylist(playlist));
        dispatch(videoQueueActions.updateCurrentVideo(video));
        lobbyActions.updateLoadingStatus('complete', {type: 'CONNECTING_TO_LOBBY', isLoading: false});
    });
};

const playNextVideo = (videoId, defaultSkip) => {
    socket.emit(socketMessages.PLAY_NEXT_VIDEO, { videoId, defaultSkip });
};

const addToPlaylist = (video) => {
    socket.emit(socketMessages.ADD_TO_PLAYLIST, video);
};

// Initial setup of socket connections when jukebox is launched
const initialSetup = () => (dispatch) => {
    setupUserConnection(dispatch);
    setupPlaylistConnection(dispatch);
    setupLobbyConnection(dispatch);
};

export default {
    initialSetup,
    addToPlaylist,
    playNextVideo
};