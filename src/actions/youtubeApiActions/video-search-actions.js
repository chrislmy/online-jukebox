import axios from 'axios'
import config from '../../config'

const getVideos = (query) => new Promise((resolve, reject) => {
    let videos = [];
    axios.get(config.keys.SERVER_BASE_ENDPOINT + '/videos?query=' + query)
        .then((response) => {
            resolve(response.data);
        })
        .catch((error) => {
            reject(error.response);
        });
});


export default {
    getVideos
}