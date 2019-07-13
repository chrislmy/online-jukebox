import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import './footerCurrentSong.css';

const SongInfo = ({ videoTitle, channelTitle, suggestedUser }) => (
    <div className="footer-song-info">
        <h3 className="footer-video-title">{videoTitle}</h3>
        { (channelTitle && suggestedUser) &&
            <Fragment>
                <h4 className="footer-video-channel">{channelTitle}</h4>
                <h4 className="footer-video-suggested-user">Added by: {suggestedUser}</h4>
            </Fragment> }
    </div>
);

const FooterCurrentSong = ({videoTitle, channelTitle, suggestedUser, thumbnail}) => (
    <section className="footer-current-song">
        { videoTitle &&  
            <Fragment>
                <img alt="video-thumbnail" className="footer-video-thumbnail" src={thumbnail} />
                <SongInfo 
                    videoTitle={videoTitle}
                    channelTitle={channelTitle} 
                    suggestedUser={suggestedUser}
                />
            </Fragment> }
    </section>
);

const mapStateToProps = (state) => ({
    videoTitle: state.video.videoTitle,
    channelTitle: state.video.channelTitle,
    suggestedUser: state.video.suggestedUser,
    thumbnail: state.video.thumbnail
});

export default connect(mapStateToProps)(FooterCurrentSong);