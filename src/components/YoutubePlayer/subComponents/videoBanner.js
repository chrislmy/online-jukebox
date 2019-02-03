import React from 'react';
import { Button } from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import videoQueueActions from '../../../actions/actionCreators/video-queue-actions';
import lobbyActions from '../../../actions/actionCreators/lobby-actions';
import './videoBanner.css';

const volumes = [25, 50, 75, 100];

const volumeControl = (volume, player) => {
    lobbyActions.updateVolume(volume);
    if(volume === 0){
        player.mute();
        return
    }
    player.setVolume(volume)
    player.unMute();
}

const VolumeButton = ({volume, player}) => (
    <Button 
        className="volume-buttons"
        bsStyle="primary"
        bsSize="small"
        onClick={ () => { volumeControl(volume, player) } }
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
                        onClick={ () => { volumeControl(50, player) } }
                    >
                        <i className="fas fa-volume-mute"></i>
                    </Button> :
                    <Button 
                        className="mute-button"
                        bsStyle="primary"
                        bsSize="small"
                        onClick={ () => { volumeControl(0, player) } }
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