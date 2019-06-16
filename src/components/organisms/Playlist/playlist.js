import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import VideoProgressBar from '../../molecules/VideoProgressBar/videoProgressBar';
import convertTimeString from '../../../utils/convertTimeString';
import './playlist.css';

const EmptyPlaylistView = () => (
    <div className="empty-video-background">
        <i className="pause-icon far fa-pause-circle"></i>
        <h4 className="no-video-text">Currently no videos on the queue</h4>
    </div>
);

const PlaylistView = ({playlist, videoDuration}) => {
    const listItems = playlist.map((video,index) => (
        <Fragment key={index}>
            <li className="playlist-item" key={index}>
                <i className="music-icon fas fa-music"></i>{video.videoTitle}
            </li>
            { index === 0 && <VideoProgressBar videoDuration={videoDuration}/> }
            <hr className="seperator"/>
        </Fragment>
    ))

    return (
        <div className="playlist-section">
            <h4 className="playlist-header"> Current Playlist</h4>
            <hr className="seperator"/>
            <ul className="video-playlist">
                { playlist.length > 0 ? (listItems) : <EmptyPlaylistView/> }
            </ul>
        </div>
    )
}

const mapStateToProps = state => ({
    playlist: state.playlist.currentPlaylist,
    videoDuration: convertTimeString(state.video.videoDuration)
});

const Playlist = connect(mapStateToProps)(PlaylistView);

export default Playlist;