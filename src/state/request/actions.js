const types = {
    LOADING_DATA: 'loadingData',
    DATA_LOADED_SUCCESS: 'loadingSuccess',
    DATA_LOADED_FAILURE: 'loadingFailure'
}

const dataLoading = (requestName) => ({
    type: types.LOADING_DATA,
    requestName
});

const dataLoadingSuccess = (requestName) => ({
    type: types.DATA_LOADED_SUCCESS,
    requestName
});

const dataLoadingFailure = (requestName) => ({
    type: types.DATA_LOADED_FAILURE,
    requestName
});

export {
    types,
    dataLoading,
    dataLoadingSuccess,
    dataLoadingFailure
};