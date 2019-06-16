import React from 'react';
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import { connect } from 'react-redux';
import config from '../../../config';
import VideoBanner from './subComponents/videoBanner';
import NoVideoBackdrop from './subComponents/noVideoBackdrop';
import './youtubePlayer.css';
import { updateQueue } from '../../../state/playlist/actions';

class YoutubePlayerView extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            player: null
        };
        
        this._onReady = this._onReady.bind(this);
        this._onStateChange = this._onStateChange.bind(this);
    }

    _onReady(event) {
        // Mount player to component
        this.setState({
            player: event.target
        });
        window.player = event.target;
        event.target.mute();
        event.target.playVideo();
    }

    _onStateChange(event) {
        // Finished playing
        if(event.data === 0) {
            updateQueue(this.props.currentVideoId, false);
        }
    }

    render() {
        const { currentVideoId, suggestedUser } = this.props

        const playerClassName = config.environment.debug ? 'youtube-player-debug' : 'youtube-player';
        const debugPlayerVars = { autoplay: 1 };
        const defaultPlayerVars = {
            autoplay: 1,
            controls: 0,
            showinfo: 0
        };

        const playerVars = config.environment.debug ? debugPlayerVars : defaultPlayerVars;

        const opts = {
            height: '250',
            width: '420',
            playerVars
        }

        return (
            <div className="youtube-player-wrapper">
                { currentVideoId === '' && <NoVideoBackdrop /> }
                <Youtube
                    className= {playerClassName}
                    videoId={currentVideoId}
                    opts={opts}
                    onReady={this._onReady}
                    onStateChange={this._onStateChange}
                />
                { suggestedUser !== '' 
                    ? <VideoBanner suggestedUser={suggestedUser} videoId={currentVideoId} player={this.state.player}/>
                    : <h4 className="jukebox-paused-title">There are currently no songs in the playlist</h4>
                }
            </div>
        )
    }
}

YoutubePlayerView.propTypes = {
    currentVideoId: PropTypes.string,
    suggestedUser: PropTypes.string
};

const mapStateToProps = state => ({
    currentVideoId: state.video.videoId,
    suggestedUser: state.video.suggestedUser
});

const YoutubePlayer = connect(mapStateToProps)(YoutubePlayerView);

export default YoutubePlayer