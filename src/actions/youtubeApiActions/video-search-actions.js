import axios from 'axios'
import config from '../../config'
import moment from 'moment';

const maxResults = 15;

const getVideos = (query) => new Promise((resolve, reject) => {
    let videos = [];
    axios.get(config.keys.API_BASE_URL + 'search?key=' + config.keys.API_KEY + '&q=' + query + '&part=snippet' + '&maxResults=' + maxResults)
        .then(({ data }) => {
            videos = data.items.filter(video => video.id.kind === 'youtube#video');
            
            if( (videos.length % 2) !== 0 ) {
                videos.splice(-1,1);
            }
            resolve(videos);
        })
        .catch((error) => {
            reject(error.response);
        });
});


export default {
    getVideos
}