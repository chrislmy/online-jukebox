import types from '../../reducers/actionTypes';
import store from '../../store/index';

const updateVolumeAction = (volume) => ({
    type: types.UPDATE_VOLUME,
    data: volume
});

const updateVolume = (volume) => {
    store.dispatch(updateVolumeAction(volume));
}

export default {
    updateVolume
};