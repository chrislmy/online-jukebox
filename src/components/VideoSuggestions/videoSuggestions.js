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
        const etag = video.etag;
        const title = video.snippet.title;
        const thumbnailUrl = video.snippet.thumbnails.high.url;

        return (
            <div>
                <li className="suggestion-list-item" key={etag}>
                    <div><img alt="video-thumbnail" className="suggestion-thumbnail" src={thumbnailUrl} /></div>
                    <div className="suggestion-description">
                        <h3 className="suggestion-title">
                            <i className="fas fa-music music-icon"></i>{title}
                        </h3>
                        <div className="video-channel">
                            <i className="fab fa-youtube-square youtube-icon"></i> Bastille VEVO
                        </div>
                        <div className="video-duration">
                            <i className="fas fa-stopwatch stopwatch-icon"></i> 4:30
                        </div>
                    </div>
                    <Button
                        className="add-video-button"
                        bsStyle="primary"
                        onClick={ () => this.handleClick(video.id.videoId, title) }
                        >
                            Add To Queue
                    </Button>
                </li>
                <hr className="video-suggestion-seperator"/>
            </div>
        );
    }
}

const VideoSuggestions = (props) => {
    // The videos array being passed here is a 2d array [['video1', 'video2'], ['video3', 'video4']]
    const rows = props.videos.map(video => (
        <VideoPanel key={video.etag} video={video} />
    ))

    return <ul className="video-suggestion-list">{rows}</ul>
}

export default VideoSuggestions