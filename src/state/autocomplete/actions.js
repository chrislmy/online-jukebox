import jsonp from 'jsonp';
import config from '../../config'

const types = {
    FAILURE: 'autocomplete/FAILURE',
    SUCCESS: 'autocomplete/SUCCESS',
    LOADING: 'autocomplete/LOADING',
    LOADING_COMPLETE: 'autocomplete/LOADING_COMPLETE'
};

const formatSuggestions = suggestions => suggestions.map((suggestion) => {
    return { name: suggestion[0] };
});

const getAutocompleteSuggestions = (query) => new Promise((resolve, reject) => {
    const path = `${config.api.autocomplete.BASE_URL}?client=youtube&ds=yt&q=${query}`;

    jsonp(path , (error, data) => {
        if(error) {
            reject(new Error('Error in retreiving autocomplete suggestions'));
        } else {
            resolve(formatSuggestions(data[1]));
        }
    });
});

const updateAutocompleteSuggestions = (query) => async(dispatch) => {
    dispatch({ type: types.LOADING });

    try {
        const options = await getAutocompleteSuggestions(query);
        dispatch({ type: types.SUCCESS,  options });
        dispatch({ type: types.LOADING_COMPLETE });
    }
    catch (error) {
        dispatch({ type: types.FAILURE });
        dispatch({ type: types.LOADING_COMPLETE });
    }
};

export {
    types,
    updateAutocompleteSuggestions
};