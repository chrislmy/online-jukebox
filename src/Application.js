import React, { Component } from 'react';
import './Application.css';
import ApplicationHeader from './components/organisms/ApplicationHeader/applicationHeader';
import SearchBar from './components/organisms/SearchBar/searchBar';
import YoutubePlayer from './components/organisms/YoutubePlayer/youtubePlayer';
import socketActions from './actions/socketActions/socket-actions';
import Playlist from './components/organisms/Playlist/playlist';
import NavigationBar from './components/organisms/Navbar/navbar';
import LoadingSpinner from './components/molecules/LoadingSpinner/loadingSpinner';
import LobbyControls from './components/organisms/LobbyControls/lobbyControls';

class Application extends Component {
    componentDidMount() {
        socketActions.initialSetup();
    }

    render() {
        return (
            <div className="App">
                <LoadingSpinner />
                <NavigationBar />
                <ApplicationHeader />
                <div className="upper-section-container">
                    <div className="player-view-container">
                        <span className="current-playlist-section"><Playlist /></span>
                        <span className="youtube-player-container"><YoutubePlayer /></span>
                    </div>
                    {/* <LobbyControls/> */}
                </div>
                <div className="lower-section-container">
                    <SearchBar />
                </div>
            </div>
        );
    }
}

export default Application;
