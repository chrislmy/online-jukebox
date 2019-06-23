import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from 'react-bootstrap/lib/Tabs';
import Tab from 'react-bootstrap/lib/Tab';
import './Application.css';
import ApplicationHeader from './components/organisms/ApplicationHeader/applicationHeader';
import SearchBar from './components/organisms/SearchBar/searchBar';
import YoutubePlayer from './components/organisms/YoutubePlayer/youtubePlayer';
import Playlist from './components/organisms/Playlist/playlist';
import NavigationBar from './components/organisms/Navbar/navbar';
import LoadingSpinner from './components/molecules/LoadingSpinner/loadingSpinner';
import LobbyControls from './components/organisms/LobbyControls/lobbyControls';
import { setupUserConnection } from './state/user/actions';
import { getLobbyUsers } from './state/lobby/actions';
import { setupPlaylistConnection } from './state/playlist/actions';

class ApplicationView extends Component {
    componentDidMount() {
        this.props.initLobby();
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
                    {/* <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
                        <Tab eventKey={1} title="Tab 1"> */}
                            <SearchBar />
                        {/* </Tab>
                    </Tabs>; */}
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    initLobby: () => {
        dispatch(setupUserConnection());
        dispatch(getLobbyUsers());
        dispatch(setupPlaylistConnection());
    }
});

const Application = connect(null, mapDispatchToProps)(ApplicationView)

export default Application;
