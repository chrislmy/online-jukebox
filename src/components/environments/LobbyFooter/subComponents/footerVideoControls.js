import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap/lib';
import VideoProgressBarWrapper from '../../../molecules/VideoProgressBar/videoProgressBar';
import FooterProgressDuration from './footerProgressDuration';
import './footerVideoControls.css';
import convertTimeStringToSeconds from '../../../../utils/convertTimeString';
import { updateQueue } from '../../../../state/playlist/actions';

const FooterVideoControls = ({videoDuration, videoId}) => (
    <section className="footer-controls">
        <div className="footer-control-buttons">
            <Button 
                className="favorite-video-button"
                bsStyle="primary"
                bsSize="small"
            >
                <i className="far fa-heart heart-icon"></i>
            </Button>

            <Button 
                className="skip-video-button"
                bsStyle="primary"
                bsSize="small"
                onClick={ () => updateQueue(videoId, true) }
            >
                Skip <i className="skip-icon fas fa-forward"></i>
            </Button>
        </div>
        <div className="footer-progress-bar">
            <FooterProgressDuration  videoDuration={videoDuration}/>
            <VideoProgressBarWrapper videoDuration={videoDuration} />
        </div>
    </section>
)


const mapStateToProps = state => ({
    videoId: state.video.videoId,
    videoDuration: convertTimeStringToSeconds(state.video.videoDuration),
});

export default connect(mapStateToProps)(FooterVideoControls);