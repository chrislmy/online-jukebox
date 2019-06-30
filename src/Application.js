import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Application.css';
import NavigationBar from './components/organisms/Navbar/navbar';
import LoadingSpinner from './components/molecules/LoadingSpinner/loadingSpinner';
import LobbyMainContent from './components/environments/LobbyMainContent/lobbyMainContent';
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
                <LobbyMainContent />
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
