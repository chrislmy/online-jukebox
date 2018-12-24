import React from 'react';
import Youtube from 'react-youtube';
import { connect } from 'react-redux';
import config from '../../config';
import videoQueueActions from '../../actions/actionCreators/video-queue-actions';
import './youtubePlayer.css';

class YoutubePlayerView extends React.Component {
    constructor(props) {
        super(props);
    
        this.onReady = this._onReady.bind(this);
        this.onChangeVideo = this._onStateChange.bind(this);
    }

    render() {
        const { currentVideoId } = this.props

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
            </div>
        )
    }

    _onReady(event) {
        event.target.playVideo();
    }

    _onStateChange(event) {
        // Mounted
        if(event.data === -1) {
            event.target.seekTo(50,true);
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
        currentVideoId: state.video.videoId
    }
}

const YoutubePlayer = connect(mapStateToProps)(YoutubePlayerView);

export default YoutubePlayer