import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import videoQueueActions from '../../../actions/actionCreators/video-queue-actions';
import lobbyActions from '../../../actions/actionCreators/lobby-actions';
import "react-input-range/lib/css/index.css";
import './videoBanner.css';

const volumeControl = (volume, player) => {
    lobbyActions.updateVolume(volume);
    if(volume === 0){
        player.mute();
        return
    }
    player.setVolume(volume)
    player.unMute();
}

const VideoBannerView = ({suggestedUser, player, volume}) => (
    <React.Fragment>
        <h4 className="video-banner-title">
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
            <InputRange
                maxValue={100}
                minValue={0}
                value={volume}
                onChange={value => volumeControl(value, player)} 
            />
        </div>
        
    </React.Fragment>
);

VideoBannerView.propTypes = {
    suggestedUser: PropTypes.string.isRequired,
    player: PropTypes.object,
    volume: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    volume: state.lobby.volume
});

const VideoBanner = connect(mapStateToProps)(VideoBannerView);

export default VideoBanner;