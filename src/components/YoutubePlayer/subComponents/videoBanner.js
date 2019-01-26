import React from 'react';
import { Button } from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import videoQueueActions from '../../../actions/actionCreators/video-queue-actions';
import lobbyActions from '../../../actions/actionCreators/lobby-actions';
import './videoBanner.css';

const volumes = [25, 50, 75, 100];

const VolumeButton = ({volume, player}) => (
    <Button 
        className="volume-buttons"
        bsStyle="primary"
        bsSize="small"
        onClick={ () => { player.setVolume(volume); lobbyActions.updateVolume(volume); } }
    >
        {volume}
    </Button>
);

const VideoBannerView = ({suggestedUser, videoId, player, volume}) => {
    const volumeButtons = volumes.map((volume,index) => (
        <VolumeButton player={player} volume={volume} key={index} />
    ))

    return (
        <div>
            <h4 className="Video-Banner-Title">
                Added by : <span className="suggested-user" >{suggestedUser}</span>
            </h4>
            <div className="control-buttons">
                <Button 
                    className="skip-video-button"
                    bsStyle="primary"
                    bsSize="small"
                    onClick={ () => videoQueueActions.updateQueue(true) }
                >
                    Skip <i className="skip-icon fas fa-forward"></i>
                </Button>

                { volume === 0 ?
                    <Button 
                        className="mute-button"
                        bsStyle="primary"
                        bsSize="small"
                        onClick={ () => { player.unMute(); lobbyActions.updateVolume(50) } }
                    >
                        <i className="fas fa-volume-mute"></i>
                    </Button> :
                    <Button 
                        className="mute-button"
                        bsStyle="primary"
                        bsSize="small"
                        onClick={ () => { player.mute(); lobbyActions.updateVolume(0) } }
                    >
                        <i className="fas fa-volume-up"></i>
                    </Button>
                }

                {volumeButtons}
            </div>
        </div>
    )
};

const mapStateToProps = state => ({
    volume: state.lobby.volume
});

const VideoBanner = connect(mapStateToProps)(VideoBannerView);

export default VideoBanner;