import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import SearchBar from './components/SearchBar/searchBar';
import YoutubePlayer from './components/YoutubePlayer/youtubePlayer';
import socketActions from './actions/socketActions/socket-actions';
import Playlist from './components/Playlist/playlist';
import NavigationBar from './components/Navbar/navbar';
import LoadingSpinner from './components/LoadingSpinner/loadingSpinner'

class App extends Component {
    componentDidMount() {
        socketActions.initialSetup();
    }

    render() {
        return (
            <div className="App">
                <LoadingSpinner />
                <NavigationBar />
                <Header />
                <div className="upper-section-container">
                    <div className="player-view-container">
                        <span className="current-playlist-section"><Playlist /></span>
                        <span className="youtube-player-container"><YoutubePlayer /></span>
                    </div>
                </div>
                <div className="lower-section-container"><SearchBar /></div>
            </div>
        );
    }
}

export default App;
