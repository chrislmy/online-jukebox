import React from 'react';
import { Button } from 'react-bootstrap/lib';
import VideoSuggestionDescription from './subComponents/videoSuggestionDescription';
import videoQueueActions from '../../../actions/actionCreators/video-queue-actions';
import './videoSuggestions.css';

class VideoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(videoId, videoTitle, videoDuration) {
        videoQueueActions.addVideoToQueue(videoId, videoTitle, videoDuration);
    }

    render() {
        const video = this.props.video;

        return (
            <React.Fragment>
                <li className="suggestion-list-item" key={video.videoId}>
                    <div><img alt="video-thumbnail" className="suggestion-thumbnail" src={video.thumbnail} /></div>
                    <VideoSuggestionDescription
                        videoTitle={video.title}
                        channelTitle={video.channelTitle}
                        videoDuration={video.duration} 
                    />
                    <Button
                        className="add-video-button"
                        bsStyle="primary"
                        onClick={ () => this.handleClick(video.videoId, video.title, video.duration) }
                        >
                            <i className="fas fa-plus plus-icon"></i>
                    </Button>
                </li>
                <hr className="video-suggestion-seperator"/>
            </React.Fragment>
        );
    }
}

const VideoSuggestions = ({ videos }) => {
    const rows = videos.map(video => (
        <VideoPanel key={video.videoId} video={video} />
    ))

    return <ul className="video-suggestion-list">{rows}</ul>
}

export default VideoSuggestions