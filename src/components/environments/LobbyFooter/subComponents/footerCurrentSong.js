import React from 'react';
import './footerCurrentSong.css';

const FooterCurrentSong = () => (
    <section className="footer-current-song">
        <img alt="video-thumbnail" className="footer-video-thumbnail" src="https://i.ytimg.com/vi/0s7pKFWLgWk/hqdefault.jpg" />
        <div className="footer-song-info">
            <h3 className="footer-video-title">Ritual (Official Audio)</h3>
            <h4 className="footer-video-channel">RitaOraVEVO</h4>
            <h4 className="footer-video-suggested-user">Added by: Repulsive Papaya</h4>
        </div>
    </section>
);

export default FooterCurrentSong;