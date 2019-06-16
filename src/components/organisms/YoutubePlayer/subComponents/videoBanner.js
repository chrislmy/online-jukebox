import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import './videoBanner.css';
import { updateQueue } from '../../../../state/playlist/actions';
import { updateVolume } from '../../../../state/lobby/actions';

const VideoBannerView = ({suggestedUser, player, videoId, volume, updateVolume}) => (
    <Fragment>
        <h4 className="video-banner-title">
            Added by : <span className="suggested-user" >{suggestedUser}</span>
        </h4>
        <div className="control-buttons">
            <Button 
                className="skip-video-button"
                bsStyle="primary"
                bsSize="small"
                onClick={ () => updateQueue(videoId, true) }
            >
                Skip <i className="skip-icon fas fa-forward"></i>
            </Button>

            { volume === 0 ?
                <Button 
                    className="mute-button"
                    bsStyle="primary"
                    bsSize="small"
                    onClick={ () => { updateVolume(50, player) } }
                >
                    <i className="fas fa-volume-mute"></i>
                </Button> :
                <Button 
                    className="mute-button"
                    bsStyle="primary"
                    bsSize="small"
                    onClick={ () => { updateVolume(0, player) } }
                >
                    <i className="fas fa-volume-up"></i>
                </Button>
            }
            <InputRange
                maxValue={100}
                minValue={0}
                value={volume}
                onChange={value => updateVolume(value, player)} 
            />
        </div>
    </Fragment>
);

VideoBannerView.propTypes = {
    suggestedUser: PropTypes.string.isRequired,
    player: PropTypes.object,
    volume: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
    volume: state.lobby.volume
});

const mapDispatchToProps = dispatch => ({
    updateVolume: (volume, player) => { 
        dispatch(updateVolume(volume, player));
    }
});

const VideoBanner = connect(mapStateToProps, mapDispatchToProps)(VideoBannerView);

export default VideoBanner;