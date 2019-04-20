import socketActions from '../socketActions/socket-actions';
import types from '../../reducers/actionTypes';
import store from '../../store/index';
import lobbyActions from './lobby-actions';

const addVideoToQueue = (videoId, videoTitle, videoDuration) => {
    const video = {
        videoId,
        videoTitle,
        videoDuration
    }
    lobbyActions.updateLoadingStatus('calling', {type: 'ADD_TO_PLAYLIST', isLoading: true});
    socketActions.addToPlaylist(video);
}

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
const updateQueue = (defaultSkip = true) => {
    const state = store.getState();
    const videoId = state.video.videoId;
    socketActions.playNextVideo(videoId, defaultSkip);
}

// Redux store actions
const updateCurrentVideo = (video) => ({
    type: types.UPDATE_CURRENT_VIDEO,
    data: video
})

const updatePlaylist = (playlist) => ({
    type: types.UPDATE_PLAYLIST,
    data: playlist
});

export default {
    addVideoToQueue,
    updateCurrentVideo,
    updatePlaylist,
    getHeadVideoPlaylist,
    updateQueue
}
