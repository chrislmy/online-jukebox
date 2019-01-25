import React from 'react';
import { Button } from 'react-bootstrap/lib';
import videoQueueActions from '../../actions/actionCreators/video-queue-actions';
import './videoSuggestions.css';

class VideoPanel extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(videoId, videoTitle) {
        videoQueueActions.addVideoToQueue(videoId, videoTitle);
    }

    render() {
        const video = this.props.video;

        return (
            <div>
                <li className="suggestion-list-item" key={video.videoId}>
                    <div><img alt="video-thumbnail" className="suggestion-thumbnail" src={video.thumbnail} /></div>
                    <div className="suggestion-description">
                        <h3 className="suggestion-title">
                            <i className="fas fa-music music-icon"></i>{video.title}
                        </h3>
                        <div className="video-channel">
                            <i className="fab fa-youtube-square youtube-icon"></i> {video.channelTitle}
                        </div>
                        <div className="video-duration">
                            <i className="fas fa-stopwatch stopwatch-icon"></i> {video.duration}
                        </div>
                    </div>
                    <Button
                        className="add-video-button"
                        bsStyle="primary"
                        onClick={ () => this.handleClick(video.videoId, video.title) }
                        >
                            <i className="fas fa-plus plus-icon"></i>
                    </Button>
                </li>
                <hr className="video-suggestion-seperator"/>
            </div>
        );
    }
}

const VideoSuggestions = (props) => {
    const rows = props.videos.map(video => (
        <VideoPanel key={video.videoId} video={video} />
    ))

    return <ul className="video-suggestion-list">{rows}</ul>
}

export default VideoSuggestions