import socket from '../../socket/createSocketClient';
import { 
    FETCH_PLAYLIST,
    UPDATE_PLAYLIST,
    PLAY_NEXT_VIDEO,
    ADD_TO_PLAYLIST
} from '../../socket/socketMessages';
import { dataLoading, dataLoadingSuccess } from '../request/actions';
import { INIT_LOBBY, ADD_VIDEO_TO_PLAYLIST } from '../request/requestNames';
import { updateCurrentVideo } from '../video/actions';

const types = {
    UPDATE_PLAYLIST: 'updatePlaylist'
};

const playNextVideo = (videoId, defaultSkip) => {
    socket.emit(PLAY_NEXT_VIDEO, { videoId, defaultSkip });
};

const addToPlaylist = (video) => {
    socket.emit(ADD_TO_PLAYLIST, video);
};

const getHeadVideoPlaylist = (playlist) => {
    // Catches case when playlist array is empty
    const nullVideo = {
        videoTitle: '',
        videoId: '',
        suggestedUser: '',
        videoDuration: ''
    };
    const head = playlist.length > 0 ? playlist[0] : nullVideo;
    return head;
};

// If defaultSkip is set to false then only the host will play the next video
const updateQueue = (currentVideoId, defaultSkip = true) => {
    playNextVideo(currentVideoId, defaultSkip);
};

// Redux store actions
const updatePlaylist = (playlist) => ({
    type: types.UPDATE_PLAYLIST,
    currentPlaylist: playlist
});

// Initialises socket playlist connection with server
const setupPlaylistConnection = () => (dispatch) => {
    socket.emit(FETCH_PLAYLIST);
    socket.on(UPDATE_PLAYLIST, (data) => {
        const playlist = data.videos;
        const video = getHeadVideoPlaylist(playlist);
        dispatch(updatePlaylist(playlist));
        dispatch(updateCurrentVideo(video));
        dispatch(dataLoadingSuccess(INIT_LOBBY));
    });
};

const addVideoToQueue = (video) => (dispatch) => {
    dispatch(dataLoading(ADD_VIDEO_TO_PLAYLIST));
    addToPlaylist(video);
    dispatch(dataLoadingSuccess(ADD_VIDEO_TO_PLAYLIST));
};

export {
    types,
    playNextVideo,
    addToPlaylist,
    getHeadVideoPlaylist,
    updateQueue,
    updatePlaylist,
    setupPlaylistConnection,
    addVideoToQueue
};