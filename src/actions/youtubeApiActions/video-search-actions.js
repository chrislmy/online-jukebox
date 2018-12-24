import axios from 'axios'
import config from '../../config'

const MAX_RESULTS = 10;

const getVideos = (query) => new Promise((resolve, reject) => {
    let videos = [];
    axios.get(config.keys.API_BASE_URL + '?key=' + config.keys.API_KEY + '&part=snippet&q=' + query + '&maxResults=' + MAX_RESULTS)
        .then(({ data }) => {
            videos = data.items.filter(video => video.id.kind === 'youtube#video');
            if( (videos.length % 2) !== 0 ) {
                videos.splice(-1,1);
            }
            console.log(videos);
            resolve(videos);
        })
        .catch((error) => {
            reject(error.response);
        });
})

export default {
    getVideos
}