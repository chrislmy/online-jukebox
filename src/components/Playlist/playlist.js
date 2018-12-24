import React from 'react';
import { connect } from 'react-redux';
import './playlist.css';

const PlaylistView = ({playlist}) => {
    const listItems = playlist.map((video,index) => (
        <li className="Playlist-Item" key={index}>
            {video.videoTitle}
        </li>
    ))

    return (
        <div>
            <h3 className="Playlist-Header"><i className="fas fa-music"></i> Current Playlist</h3>
            <ul className="Video-Playlist">
                {playlist.length > 0 ? (listItems) : ('Currently no videos on the queue :(')}
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