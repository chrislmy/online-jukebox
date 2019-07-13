import React from 'react';
import { connect } from 'react-redux';
import InputRange from 'react-input-range';
import "react-input-range/lib/css/index.css";
import './footerVolumeControls.css'
import { Button } from 'react-bootstrap/lib';
import { updateVolume } from '../../../../state/lobby/actions';

const FooterVolumeControls = ({player, volume, updateVolume}) => (
    <section className="footer-volume-controls">
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
    </section>
);


const mapStateToProps = state => ({
    volume: state.lobby.volume,
    videoId: state.video.videoId,
    player: state.lobby.player
});

const mapDispatchToProps = dispatch => ({
    updateVolume: (volume, player) => { 
        dispatch(updateVolume(volume, player));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FooterVolumeControls);