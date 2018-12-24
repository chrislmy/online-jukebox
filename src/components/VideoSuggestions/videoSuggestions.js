import React from 'react';
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap/lib';
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

    renderCols(video) {
        const etag = video.etag;
        const title = video.snippet.title;
        const thumbnailUrl = video.snippet.thumbnails.high.url;
        return (
            <Col key={etag} sm={12} md={6}>
                <li className="Suggestion-Container" key={etag}>
                    <Panel className="Panel-Wrapper">
                        <Panel.Heading>
                            <div className="Suggestion-Title">{title}</div>
                        </Panel.Heading>
                        <Panel.Body>
                            <div><img alt="video-thumbnail" className="Suggestion-Thumbnail" src={thumbnailUrl} /></div>
                            <Button
                                className="Add-Video-Button"
                                bsStyle="primary"
                                onClick={ () => this.handleClick(video.id.videoId, title) }
                            >
                                Add To Queue
                            </Button>
                        </Panel.Body>
                    </Panel>
                </li>
            </Col>
        );
    }

    render() {
        // There are two videos per column
        return (
            <div>{this.props.videos.map((video) => this.renderCols(video))}</div>
        );
    }
}

const VideoSuggestions = (props) => {
    // The videos array being passed here is a 2d array [['video1', 'video2'], ['video3', 'video4']]
    const rows = props.videos.map(video => (
        <Row key={video[0].etag} className="show-grid">
            <VideoPanel videos={video} />
        </Row>
    ))

    return <ul className="Video-List"><Grid>{rows}</Grid></ul>
}

export default VideoSuggestions