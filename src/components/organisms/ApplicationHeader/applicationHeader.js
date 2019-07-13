import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './applicationHeader.css';

const ApplicationHeaderView = ({username }) => (
    <header className="application-header">
        <h3 className="welcome-heading">
            Welcome, <span className="username-field"> {username} </span>
        </h3>
    </header>
);

ApplicationHeaderView.propTypes = {
    suggestedUser: PropTypes.string
};

const mapStateToProps = state => ({
    username: state.user.username
});

const ApplicationHeader = connect(mapStateToProps)(ApplicationHeaderView);

export default ApplicationHeader