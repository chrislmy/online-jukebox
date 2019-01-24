import React from 'react';
import { connect } from 'react-redux';
import './playlist.css';

const EmptyPlaylistView = () => (
    <div className="Empty-Video-Background">
        <i className="Pause-Icon far fa-pause-circle"></i>
        <h4 className="No-Video-Text">Currently no videos on the queue</h4>
    </div>
);

const PlaylistView = ({playlist}) => {
    const listItems = playlist.map((video,index) => (
        <div key={index} className="Playlist-Item-Wrapper">
            <li className="Playlist-Item" key={index}>
                <i className="Music-Icon fas fa-music"></i>{video.videoTitle}
            </li>
            <hr className="seperator"/>
        </div>
    ))

    return (
        <div className="Playlist-Section">
            <h4 className="Playlist-Header"> Current Playlist</h4>
            <hr className="seperator"/>
            <ul className="Video-Playlist">
                { playlist.length > 0 ? (listItems) : <EmptyPlaylistView/> }
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        playlist: state.playlist.currentPlaylist
    }
};

const Playlist = connect(mapStateToProps)(PlaylistView);

export default Playlist;