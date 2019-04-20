import axios from 'axios'
import config from '../../config'
import lobbyActions from '../actionCreators/lobby-actions';

const getVideos = (query) => new Promise((resolve, reject) => {
    lobbyActions.updateLoadingStatus('calling', {type: 'SEARCHING_YOUTUBE_VIDEO', isLoading: true});
    axios.get(config.keys.SERVER_BASE_ENDPOINT + '/videos?query=' + query)
        .then((response) => {
            lobbyActions.updateLoadingStatus('complete', {type: 'SEARCHING_YOUTUBE_VIDEO', isLoading: false});
            resolve(response.data);
        })
        .catch((error) => {
            lobbyActions.dataLoadingComplete('complete', {type: 'CALL_FAILED_VIDEO_SEARCH', isLoading: false});
            reject(error.response);
        });
});


export default {
    getVideos
}