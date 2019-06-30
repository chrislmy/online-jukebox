import React from 'react';
import './emptyTabPlaceholder.css';

const HeadPhoneIcon = () => (
    <i className="fas fa-headphones-alt empty-tab-placeholder-icon"></i>
);

const EmptyTabPlaceholder = () => (
    <div className="empty-tab-container">
        <HeadPhoneIcon />
        <h4 className="empty-tab-prompt-prefix"> Search for your favorite songs </h4>
        <h5 className="empty-tab-prompt-suffix"> Let's get this party started! </h5>
    </div>
);

export default EmptyTabPlaceholder;