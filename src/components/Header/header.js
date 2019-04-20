import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import logo from '../../logo.svg';
import './header.css';

const NothingPlayingHeader = () => (
    <span>
        Nothing Playing, Party's Dead
    </span>
);

const HeaderView = ({ nowPlayingTitle, username }) => (
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

HeaderView.propTypes = {
    nowPlayingTitle: PropTypes.string,
    suggestedUser: PropTypes.string
};

const mapStateToProps = state => ({
    nowPlayingTitle: state.video.videoTitle,
    username: state.user.username
});

const Header = connect(mapStateToProps)(HeaderView);

export default Header