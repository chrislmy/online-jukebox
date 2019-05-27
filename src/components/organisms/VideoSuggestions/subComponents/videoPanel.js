import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap/lib';
import './videoPanel.css'
import VideoSuggestionDescription from './videoSuggestionDescription';
import videoQueueActions from '../../../../actions/actionCreators/video-queue-actions';

const VideoPanelView = ({ video, addVideoToQueue }) => {
    const { videoId, title, duration } = video;

    return (
        <Fragment>
            <li className="suggestion-list-item" key={video.videoId}>
                <div><img alt="video-thumbnail" className="suggestion-thumbnail" src={video.thumbnail} /></div>
                <VideoSuggestionDescription
                    videoTitle={title}
                    channelTitle={title}
                    videoDuration={duration} 
                />
                <Button
                    className="add-video-button"
                    bsStyle="primary"
                    onClick={ () => addVideoToQueue(videoId, title, duration) }
                    >
                        <i className="fas fa-plus plus-icon"></i>
                </Button>
            </li>
            <hr className="video-suggestion-seperator"/>
        </Fragment>
    );
};

const mapDispatchToProps = dispatch => ({
    addVideoToQueue: (videoId, videoTitle, videoDuration) => { 
        dispatch(videoQueueActions.addVideoToQueue(videoId, videoTitle, videoDuration))
    }
});

const VideoPanel = connect(null, mapDispatchToProps)(VideoPanelView);

export default VideoPanel;