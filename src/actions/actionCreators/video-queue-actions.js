import socketActions from '../socketActions/socket-actions';
import types from '../../reducers/actionTypes';
import store from '../../store/index';

const addVideoToQueue = (videoId, videoTitle) => {
    const state = store.getState();
    const suggestedUser = state.user.username;
    const video = {
        suggestedUser,
        videoId,
        videoTitle
    }
    socketActions.addToPlaylist(video);
}

const getHeadVideoPlaylist = (playlist) => {
    // Catches case when playlist array is empty
    const nullVideo = {
        videoTitle: '',
        videoId: '',
        suggestedUser: ''
    };
    const head = playlist && playlist[0] || nullVideo;
    return head;
};

const updateQueue = () => {
    const state = store.getState();
    const videoId = state.video.videoId;
    socketActions.playNextVideo(videoId);
}

// Redux store actions
const updateCurrentVideoTitle = (videoTitle) => ({
    type: types.UPDATE_CURRENT_VIDEO_TITLE,
    data: videoTitle
})

const updateCurrentVideoId = (videoId) => ({
    type: types.UPDATE_CURRENT_VIDEO_ID,
    data: videoId
})

const updateSuggestedUser = (suggestedUser) => ({
    type: types.UPDATE_SUGGESTED_USER,
    data: suggestedUser
})

const updatePlaylist = (playlist) => ({
    type: types.UPDATE_PLAYLIST,
    data: playlist
});

export default {
    addVideoToQueue,
    updateCurrentVideoTitle,
    updateCurrentVideoId,
    updateSuggestedUser,
    updatePlaylist,
    getHeadVideoPlaylist,
    updateQueue
}
