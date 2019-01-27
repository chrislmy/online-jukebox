import types from '../../reducers/actionTypes';
import store from '../../store/index';

const updateVolumeAction = (volume) => ({
    type: types.UPDATE_VOLUME,
    data: volume
});

const dataLoading = (payload) => ({
    type: types.LOADING_DATA,
    data: payload
});

const dataLoadingSuccess = (payload) => ({
    type: types.DATA_LOADED_SUCCESS,
    data: payload
});

const updateVolume = (volume) => {
    store.dispatch(updateVolumeAction(volume));
}

export default {
    updateVolume,
    dataLoading,
    dataLoadingSuccess
};