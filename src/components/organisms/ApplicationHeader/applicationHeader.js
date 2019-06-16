import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../../logo.svg';
import './applicationHeader.css';

const NothingPlayingHeader = () => (
    <span>
        Nothing Playing, Party's Dead
    </span>
);

const ApplicationHeaderView = ({ nowPlayingTitle, username }) => (
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="song-heading">
            { (nowPlayingTitle !== '') 
                ? (nowPlayingTitle)
                : <NothingPlayingHeader />
            }
        </h1>
        <h3 className="welcome-heading">
            Welcome, <span className="username-field"> {username} </span>
        </h3>
    </header>
);

ApplicationHeaderView.propTypes = {
    nowPlayingTitle: PropTypes.string,
    suggestedUser: PropTypes.string
};

const mapStateToProps = state => ({
    nowPlayingTitle: state.video.videoTitle,
    username: state.user.username
});

const ApplicationHeader = connect(mapStateToProps)(ApplicationHeaderView);

export default ApplicationHeader