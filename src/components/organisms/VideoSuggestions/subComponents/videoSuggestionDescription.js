import React from 'react';
import './videoSuggestionDescription.css';

const VideoSuggestionDescription = ({ videoTitle, channelTitle, videoDuration }) => (
    <div className="suggestion-description">
        <h3 className="suggestion-title">
            <i className="fas fa-music music-icon"></i> {videoTitle}
        </h3>
        <div className="video-channel">
            <i className="fab fa-youtube-square youtube-icon"></i> {channelTitle}
        </div>
        <div className="video-duration">
            <i className="fas fa-stopwatch stopwatch-icon"></i> {videoDuration}
        </div>
    </div>
);

export default VideoSuggestionDescription;