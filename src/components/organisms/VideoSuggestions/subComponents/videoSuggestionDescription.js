import React from 'react';
import './videoSuggestionDescription.css';

const VideoSuggestionDescription = ({ videoTitle, channelTitle, videoDuration }) => (
    <div className="suggestion-description">
        <h3 className="suggestion-title">
            {videoTitle}
        </h3>
        <div className="video-channel">
            {channelTitle}
        </div>
        <div className="video-duration">
            {videoDuration}
        </div>
    </div>
);

export default VideoSuggestionDescription;