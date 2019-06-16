import React from 'react';
import { Button } from 'react-bootstrap/lib';
import './lobbyControls.css';

const ThumbsUpSection = () => (
    <div className="thumbs-up-section">
        <Button
            className="thumbs-up-button"
            onClick={ () => (console.log('thumbs up')) }
        >
            <i className="thumbs-up-icon far fa-thumbs-up"></i>
        </Button>
        <div className="up-vote-text">12</div>
    </div>
);

const ThumbsDownSection = () => (
    <div className="thumbs-down-section">
        <Button
            className="thumbs-down-button"
            onClick={ () => (console.log('thumbs down')) }
        >  
            <i className="thumbs-down-icon far fa-thumbs-down"></i>
        </Button>
        <div className="down-vote-text">1</div>
    </div>
);

const LobbyControls = () => (
    <div className="lobby-controls">
        <ThumbsUpSection/>
        <ThumbsDownSection/>
    </div>
);

export default LobbyControls;