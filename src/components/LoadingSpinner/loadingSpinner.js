import React from 'react';
import { connect } from 'react-redux';
import './loadingSpinner.css';

const labelMap =  {
    CONNECTING_TO_LOBBY: 'Plugging you in ...',
    SEARCHING_YOUTUBE_VIDEO: 'Searching ...'
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

const LoadingSpinner = connect(mapStateToProps)(LoadingSpinnerView);

export default LoadingSpinner;