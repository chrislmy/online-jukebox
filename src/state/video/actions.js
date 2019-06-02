const types = {
    UPDATE_CURRENT_VIDEO: 'updateCurrentVideo'
};

const updateCurrentVideo = (video) => ({
    type: types.UPDATE_CURRENT_VIDEO,
    video
});

export {
    types,
    updateCurrentVideo
};