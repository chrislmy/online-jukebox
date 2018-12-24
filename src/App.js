import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/header';
import SearchBar from './components/SearchBar/searchBar';
import YoutubePlayer from './components/YoutubePlayer/youtubePlayer';
import socketActions from './actions/socketActions/socket-actions';
import Playlist from './components/Playlist/playlist';

class App extends Component {
    componentDidMount() {
        socketActions.initialSetup();
    }

    render() {
        return (
            <div className="App">
                <Header />
                <div className="Main-Container">
                    <div className="Player-View-Container">
                        <span className="Current-Playlist"><Playlist /></span>
                        <span className="Youtube-Player-Container"><YoutubePlayer /></span>
                    </div>
                </div>
                <div className="Search-Bar-Wrapper"><SearchBar /></div>
            </div>
        );
    }
}

export default App;
