import React from 'react';
import { connect } from 'react-redux';
import './footerVideoControls.css';
import convertTimeStringToSeconds from '../../../../utils/convertTimeString';
import VideoProgressBarWrapper from '../../../molecules/VideoProgressBar/videoProgressBar';
import FooterProgressDuration from './footerProgressDuration';

const FooterVideoControls = ({ videoDuration }) => (
    <section className="footer-controls">
        <div className="footer-control-buttons">
            <button>Play</button>
            <button>Skip</button>
            <button>Favorite</button>
        </div>
        <div className="footer-progress-bar">
            <FooterProgressDuration  videoDuration={videoDuration}/>
            <VideoProgressBarWrapper videoDuration={videoDuration} />
        </div>
    </section>
);


const mapStateToProps = state => ({
    videoDuration: convertTimeStringToSeconds(state.video.videoDuration)
});

export default connect(mapStateToProps)(FooterVideoControls);