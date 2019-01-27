const initialVideo = {
    suggestedUser: '',
    nowPlaying: '',
    videoId: ''
}

const initialPlaylist = {
    currentPlaylist: []
}

const initialUser = {
    username: ''
}

const initialLobby = {
    users: [],
    volume: 0,
    loadingData: {
        type: '',
        isLoading: false
    }
}

export default {
    initialVideo,
    initialPlaylist,
    initialUser,
    initialLobby
}