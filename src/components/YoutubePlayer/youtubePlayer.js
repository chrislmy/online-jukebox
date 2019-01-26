import React from 'react';
import Youtube from 'react-youtube';
import { Button } from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import config from '../../config';
import VideoBanner from './subComponents/videoBanner';
import videoQueueActions from '../../actions/actionCreators/video-queue-actions';
import './youtubePlayer.css';

// const VideoBanner = ({suggestedUser, videoId, player}) => (
//     <div>
//         <h4 className="Video-Banner-Title">
//             Added by : <span className="Suggested-User" >{suggestedUser}</span>
//         </h4>
//         <div className="control-buttons">
//             <Button 
//                 className="Skip-Video-Button"
//                 bsStyle="primary"
//                 bsSize="small"
//                 onClick={ () => videoQueueActions.updateQueue(true) }
//             >
//                 Skip <i className="Skip-Icon fas fa-forward"></i>
//             </Button>

//             <Button 
//                 className="Skip-Video-Button"
//                 bsStyle="primary"
//                 bsSize="small"
//                 onClick={ () => player.unMute() }
//             >
//             <i className="fas fa-volume-up"></i>
//             </Button>
//         </div>
//     </div>
// );

class YoutubePlayerView extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            player: null
        };

        this._onReady = this._onReady.bind(this);
        this._onChangeVideo = this._onStateChange.bind(this);
    }

    _onReady(event) {
        // Mount player to component
        this.setState({
            player: event.target
        });

        event.target.mute();
        event.target.playVideo();
    }

    _onStateChange(event) {
        // Mounted
        if(event.data === -1) {
            // event.target.seekTo(50,true);
        }

        // Finished playing
        if(event.data === 0) {
            videoQueueActions.updateQueue(false);
        }
        // event.target.playVideo();
    }

    render() {
        const { currentVideoId, suggestedUser } = this.props

        const playerClassName = config.environment.debug ? 'Youtube-Player-Debug' : 'Youtube-Player';
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
            <div className="Youtube-Player-Wrapper">
                <Youtube
                    className= {playerClassName}
                    videoId={currentVideoId}
                    opts={opts}
                    onReady={this._onReady}
                    onStateChange={this._onStateChange}
                />
                { suggestedUser !== '' 
                    ? <VideoBanner suggestedUser={suggestedUser} videoId={currentVideoId} player={this.state.player}/>
                    : <h4 className="Video-Banner-Title">Jukebox Currently Paused</h4>
                }
            </div>
        )
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