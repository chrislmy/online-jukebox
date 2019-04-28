import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './loadingSpinner.css';

const labelMap =  {
    CONNECTING_TO_LOBBY: 'Plugging you in ...',
    SEARCHING_YOUTUBE_VIDEO: 'Searching ...',
    ADD_TO_PLAYLIST: 'Adding to Playlist ...'
};

const LoadingSpinnerView = ({isLoading, type}) => {
    const spinnerClassName = isLoading ? 'full-page-spinner-container' : 'full-page-spinner-inactive';

    return (
        <div className={spinnerClassName}>
            <div className="full-page-spinner"></div>
            <div className="full-page-spinner-label"> {labelMap[type]} </div>
        </div>
    )
};

const mapStateToProps = state => {
    const { isLoading, type } = state.lobby.loadingData;
    return {
        isLoading,
        type
    }
}

LoadingSpinnerView.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired
};

const LoadingSpinner = connect(mapStateToProps)(LoadingSpinnerView);

export default LoadingSpinner;