import React, { Fragment } from 'react';
import './lobbyMainContent.css';
import ApplicationHeader from '../../organisms/ApplicationHeader/applicationHeader';
import YoutubePlayer from '../../organisms/YoutubePlayer/youtubePlayer';
import Playlist from '../../organisms/Playlist/playlist';
import ActionTabs from '../ActionTabs/actionTabs';
import LobbyFooter from '../LobbyFooter/lobbyFooter';
import LobbyControls from '../../organisms/LobbyControls/lobbyControls';

const LobbyMainContent = () => (
    <Fragment>
        <ApplicationHeader />
        <div className="upper-section-container">
            <div className="player-view-container">
                <span className="current-playlist-section"><Playlist /></span>
                <span className="youtube-player-container"><YoutubePlayer /></span>
            </div>
            {/* <LobbyControls/> */}
        </div>
        <div className="lower-section-container">
            <ActionTabs />
        </div>
        <LobbyFooter />
    </Fragment>
);

export default LobbyMainContent;