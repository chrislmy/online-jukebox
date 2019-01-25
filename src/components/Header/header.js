import React from 'react';
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
        <h1 className="App-title">
            { (nowPlayingTitle !== '') 
                ? ('Now Playing : ' + nowPlayingTitle)
                : <NothingPlayingHeader />
            }
        </h1>
        <h3 className="App-title">
            Welcome, <span className="Username-Field"> {username} </span>
        </h3>
    </header>
);

const mapStateToProps = state => {
    return {
        nowPlayingTitle: state.video.nowPlaying,
        username: state.user.username
    }
}

const Header = connect(mapStateToProps)(HeaderView);

export default Header