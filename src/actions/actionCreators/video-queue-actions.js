import socketActions from '../socketActions/socket-actions';
import types from '../../reducers/actionTypes';

const addVideoToQueue = (videoId, videoTitle) => {
    const video = {
        videoId,
        videoTitle
    }
    socketActions.addToPlaylist(video);
}

const getHeadVideoPlaylist = (playlist) => {
    // Catches case when playlist array is empty
    const nullVideo = {
        videoTitle: '',
        videoId: ''
    };
    const head = playlist && playlist[0] || nullVideo;
    return head;
};

const updateQueue = () => {
    socketActions.playNextVideo();
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

const updatePlaylist = (playlist) => ({
    type: types.UPDATE_PLAYLIST,
    data: playlist
});

export default {
    addVideoToQueue,
    updateCurrentVideoTitle,
    updateCurrentVideoId,
    updatePlaylist,
    getHeadVideoPlaylist,
    updateQueue
}
