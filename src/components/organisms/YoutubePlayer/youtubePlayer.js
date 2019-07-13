import React from 'react';
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import { connect } from 'react-redux';
import config from '../../../config';
import NoVideoBackdrop from './subComponents/noVideoBackdrop';
import './youtubePlayer.css';
import { updateQueue } from '../../../state/playlist/actions';
import { mountPlayer } from '../../../state/lobby/actions';

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
        const player = event.target;
        this.setState({
            player
        });
        this.props.mountPlayer(player);
        window.player = event.target;
        player.mute();
        player.playVideo();
    }

    _onStateChange(event) {
        // Finished playing
        if(event.data === 0) {
            updateQueue(this.props.currentVideoId, false);
        }
    }

    render() {
        const { currentVideoId } = this.props

        const playerClassName = config.environment.debug ? 'youtube-player-debug' : 'youtube-player';
        const debugPlayerVars = { autoplay: 1 };
        const defaultPlayerVars = {
            autoplay: 1,
            controls: 0,
            showinfo: 0
        };

        const playerVars = config.environment.debug ? debugPlayerVars : defaultPlayerVars;

        const opts = {
            height: '270',
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
            </div>
        )
    }
}

YoutubePlayerView.propTypes = {
    currentVideoId: PropTypes.string
};

const mapStateToProps = state => ({
    currentVideoId: state.video.videoId
});


const mapDispatchToProps = dispatch => ({
    mountPlayer: (player) => { 
        dispatch(mountPlayer(player));
    }
});

const YoutubePlayer = connect(mapStateToProps, mapDispatchToProps)(YoutubePlayerView);

export default YoutubePlayer