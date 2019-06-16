import React from 'react';
import VideoPanel from './subComponents/videoPanel';
import './videoSuggestions.css';

const VideoSuggestions = ({ videos }) => {
    const rows = videos.map(video => (
        <VideoPanel key={video.videoId} video={video} />
    ))

    return <ul className="video-suggestion-list">{rows}</ul>
}

export default VideoSuggestions