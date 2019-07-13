import React from 'react';
import './lobbyFooter.css';
import FooterCurrentSong from './subComponents/footerCurrentSong';
import FooterVideoControls from './subComponents/footerVideoControls';
import FooterVolumeControls from './subComponents/footerVolumeControls';

const LobbyFooter = () => (
    <div className="lobby-footer-wrapper">
        <div className="lobby-footer">
            <section className="lobby-footer-content">    
                <FooterCurrentSong />
                <FooterVideoControls />
                <FooterVolumeControls />
            </section>
        </div>
    </div>
);

export default LobbyFooter;
