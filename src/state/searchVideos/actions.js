import axios from 'axios'
import config from '../../config'
import { SEARCH_VIDEO } from '../request/requestNames';
import { 
    dataLoading,
    dataLoadingSuccess,
    dataLoadingFailure
} from '../request/actions';

const types = {
    FAILURE: 'searchVideos/FAILURE',
    SUCCESS: 'searchVideos/SUCCESS'
};

const searchVideos = (query) => (dispatch) => {
    const path = `${config.keys.SERVER_BASE_ENDPOINT}/videos?query=${query}`;
    
    dispatch(dataLoading(SEARCH_VIDEO));

    axios.get(path)
        .then((response) => {
            const videos = response.data;
            dispatch(dataLoadingSuccess(SEARCH_VIDEO));
            dispatch({ type: types.SUCCESS, videos });
        })
        .catch((error) => {
            dispatch(dataLoadingFailure(SEARCH_VIDEO));
            dispatch({ type: types.FAILURE });
        });
};

export {
    types,
    searchVideos
};