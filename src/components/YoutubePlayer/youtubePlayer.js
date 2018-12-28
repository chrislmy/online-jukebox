import React from 'react';
import Youtube from 'react-youtube';
import { Button } from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import config from '../../config';
import videoQueueActions from '../../actions/actionCreators/video-queue-actions';
import './youtubePlayer.css';

const VideoBanner = ({suggestedUser}) => (
    <h3 className="Video-Banner-Title">
        Suggested by: <span className="Suggested-User" >{suggestedUser}</span>
        <Button 
            className="Skip-Video-Button"
            bsStyle="primary"
            onClick={ () => videoQueueActions.updateQueue() }
        >
            Skip <i className="Skip-Icon fas fa-forward"></i>
        </Button>
    </h3>
);

class YoutubePlayerView extends React.Component {
    constructor(props) {
        super(props);
    
        this.onReady = this._onReady.bind(this);
        this.onChangeVideo = this._onStateChange.bind(this);
    }

    render() {
        const { currentVideoId, suggestedUser } = this.props

        const playerClassName = config.environment.debug ? 'Player-Container-Debug' : 'Player-Container';
        const debugPlayerVars = { autoplay: 1 };
        const defaultPlayerVars = {
            autoplay: 1,
            controls: 0,
            showinfo: 0
        };

        const playerVars = config.environment.debug ? debugPlayerVars : defaultPlayerVars;

        const opts = {
            height: '300',
            width: '500',
            playerVars
        }

        return (
            <div className={playerClassName}>
                <Youtube
                    videoId={currentVideoId}
                    opts={opts}
                    onReady={this._onReady}
                    onStateChange={this._onStateChange}
                />
                { suggestedUser !== '' && <VideoBanner suggestedUser={suggestedUser}/> }
            </div>
        )
    }

    _onReady(event) {
        event.target.playVideo();
    }

    _onStateChange(event) {
        // Mounted
        if(event.data === -1) {
            // event.target.seekTo(50,true);
        }

        // Finished playing
        if(event.data === 0) {
            videoQueueActions.updateQueue();
        }
        event.target.playVideo();
    }
}

const mapStateToProps = state => {
    return {
        currentVideoId: state.video.videoId,
        suggestedUser: state.video.suggestedUser
    }
}

const YoutubePlayer = connect(mapStateToProps)(YoutubePlayerView);

export default YoutubePlayer